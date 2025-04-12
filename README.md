# 🚀 RocketNG

A modern, multilingual dashboard built with **Angular**, **Tailwind CSS v4**, and **RTL support**.  
Designed for fast development, elegant UI, and full support for multi languages (English, Persian (فارسی), and etc).

---

## ✨ Features

- ⚡ Built with Angular 19+
- 🎨 Tailwind CSS v4 with full RTL and LTR support
- 🌐 i18n ready (English, Persian, ...)
- 📱 Responsive UI components
- 🌓 Dark mode ready
- 🚀 Vite for blazing fast dev experience

---

## 📦 Tech Stack

- **Framework:** [Angular](https://angular.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icon Pack:** [Lucide](https://lucide.dev/)
- **Bundler:** [Vite](https://vite.dev/)
- **Languages:** [TypeScript](https://www.typescriptlang.org/), [SCSS](https://sass-lang.com/)
- **Internationalization:** Custom i18n
- **Direction:** RTL / LTR dynamic support

---

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone https://github.com/shobeiry/rocket-ng
cd rocket-ng
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
ng serve
```
The app will be available at: http://localhost:4200

## 🌍 Language & Direction
The project supports dynamic direction switching (`dir="rtl"` or `dir="ltr"`) based on the language.
By changing the language using the TranslatorService service, the direction will be applied in a way that is appropriate for the language.

To add a new language, you can create a copy of `en.ts` or `fa.ts` in the `src/app/i18n/locales` path and translate the values. Then define the new language in the `translator.service.ts` file in the `languages` variable (in line 15).

## 🧪 Scripts

| Command  | Description                                             |
|----------|---------------------------------------------------------|
| ng       | Angular CLI                                             |
| ng s     | Serve development server                                |
| ng build | Build project for production                            |
| ng watch | Watch for file changes to build project for development |
| ng test  | Run tests                                               |


## 📜 License
This project is licensed under the MIT License.

Developed with ❤️ by [SSSH](https://github.com/shobeiry/)
