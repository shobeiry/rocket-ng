import {LanguageLocale} from '../models';
import en from "@angular/common/locales/en";

export const enLocale: LanguageLocale = {
  data: en,
  validations: {
    required: "This field is required.",
    minlength: "Minimum length is {requiredLength} characters.",
    maxlength: "Maximum length is {requiredLength} characters.",
    min: "Value must be at least {min}.",
    max: "Value must be at most {max}.",
    email: "Please enter a valid email address.",
  },
  vocabs: {}
}
