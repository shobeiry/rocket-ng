import {Component, inject} from '@angular/core';
import {Locale, TranslatorService} from '@i18n';
import {ThemeService} from '@core/services/theme.service';

@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  protected translator: TranslatorService = inject(TranslatorService);
  protected theme: ThemeService = inject(ThemeService);

  changeLanguage(lang: Locale): void {
    this.translator.setLanguage(lang, true);
  }

  changeTheme() {
    this.theme.theme = this.theme.theme == "dark" ? "light" : (this.theme.theme == "light" ? 'system' : 'dark');
  }
}
