import {ObjectType} from '@shared/utils/types';

export const locales = ["fa", "en"] as const;
export type Locale = typeof locales[number];
export type TranslatorSection = "vocabs" | "validations";

export type LanguageLocale = {
  data: any, // angular local data
  validations: ObjectType<string>,
  vocabs: ObjectType<string>
};

export type Language = {
  lang: Locale;
  name: string;
  rtl: boolean;
  local: LanguageLocale;
  date?: "solar" | "ad" | "lunar"
}
