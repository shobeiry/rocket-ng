import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {Language, Locale, TranslatorSection} from './models';
import {enLocale, faLocale} from './locales';
import {ObjectType} from '@shared/utils/types';
import {DOCUMENT, registerLocaleData} from '@angular/common';

const LOCALIZATION_LOCAL_STORAGE_KEY = 'language';
type Direction = "rtl" | "ltr";

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {
  private document: Document = inject(DOCUMENT)
  public readonly languages: Language[] = [
    {
      lang: 'fa',
      name: 'فارسی',
      rtl: true,
      date: "solar",
      local: faLocale
    },
    {
      lang: 'en',
      name: 'English',
      rtl: false,
      local: enLocale
    }
  ];
  public readonly language = signal<Language>(this.languages[0]);
  private translates: ObjectType<WritableSignal<string>> = {}
  private readonly defaultLocale: Locale = "fa";

  constructor() {
    this.setLanguage(this.getLanguageFromStorage);
  }

  private get getLanguageFromStorage(): Locale {
    return (localStorage.getItem(LOCALIZATION_LOCAL_STORAGE_KEY) || this.defaultLocale) as Locale;
  }

  public setLanguage(locale: Locale, refresh: boolean = false): void {
    const language = this.languages.find(l => l.lang == locale);
    if (language) {
      // register angular local data
      registerLocaleData(language.local.data);

      // set language signal
      this.language.set(language);

      // store locale in localstorage for restore after refresh page
      localStorage.setItem(LOCALIZATION_LOCAL_STORAGE_KEY, language.lang);

      // set class and directions in html
      const dir: Direction = language.rtl ? "rtl" : "ltr";

      // add directions to html tag
      const html = this.document.getElementsByTagName("html")[0];
      html.setAttribute('lang', language.lang);
      html.setAttribute('dir', dir);

      // add direction to body tag
      const body = this.document.body;
      body.setAttribute('direction', dir);
      body.setAttribute('dir', dir);
      body.classList.remove("rtl");
      body.classList.remove("ltr");
      body.classList.add(dir);

      if (refresh) {
        this.refresh()
      }
    }

  }

  public refresh() {
    Object.keys(this.translates).forEach(k => {
      const data = JSON.parse(k) as { vocab: string, params?: ObjectType<string>, section: TranslatorSection };
      this.translates[k].set(this.get(data.vocab, data.params, data.section));
    });
  }

  private get(vocab: string, params?: ObjectType<string>, section: TranslatorSection = "vocabs"): string {
    let result = this.language().local[section][vocab] || vocab;
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        result = result.replace(`{${k}}`, this.get(v));
      });
    }
    return result;
  }

  public trans(vocab: string, params?: ObjectType<string>, section: TranslatorSection = "vocabs") {
    const key = JSON.stringify({vocab, params, section});
    if (!this.translates[key]) {
      this.translates[key] = signal<string>(this.get(vocab, params, section))
    }
    return this.translates[key]
  }

}
