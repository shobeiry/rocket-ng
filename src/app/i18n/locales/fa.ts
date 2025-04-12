import {LanguageLocale} from '../models';
import fa from "@angular/common/locales/fa";

export const faLocale: LanguageLocale = {
  data: fa,
  validations: {
    required: "این فیلد الزامیست.",
    minlength: "ورود حداقل {requiredLength} کاراکتر الزامیست.",
    maxlength: "تعداد کاراکتر باید حداکثر {requiredLength} کاراکتر باشد.",
    min: "مقدار باید بیشتر از {min} باشد.",
    max: "مقدار باید کمتر از {max} باشد.",
    email: "لطفا یک آدرس ایمیل معتبر وارد کنید.",
  },
  vocabs: {
    Login: "ورود",
    Register: "ثبت نام",
    Name: "نام",
    "Full name": "نام و نام خانوادگی",
    "Confirm password": "تایید گذرواژه",
    "Create an account": "ایجاد حساب کاربری",
    "Enter your details below to create your account": "برای ایجاد حساب کاربری اطلاعات زیر را تکمیل کنید",
    "Log in to your account": "ورود به حساب کاربری",
    "Enter your email and password below to log in": "برای ورود ایمیل و گذرواژه خود را وارد کنید",
    Email: "ایمیل",
    Password: "گذرواژه",
    "Forgot password?": "فراموشی گذرواژه!",
    "Remember me": "مرا به خاطر بسپار",
    "Don't have an account?": "حساب کاربری ندارید؟",
    "Create account": "ایجاد حساب",
    "Already have an account?": "حساب کاربری دارید؟",
    "Forgot password": "فراموشی گذرواژه",
    "Enter your email to receive a password reset link": "ایمیل خود را برای ارسال لینک بازیابی وارد کنید",
    "Email password reset link": "ارسال ایمیل لینک بازیابی",
    "Or, return to": "یا، بازگشت به",
    Logout: "خروج",
  }
}
