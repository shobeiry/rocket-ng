import {inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

type Theme = 'dark' | 'light' | "system";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private document: Document = inject(DOCUMENT)

  constructor() {
    this.detectTheme();
  }

  public set theme(theme: Theme) {
    localStorage.setItem('theme', theme);
    this.detectTheme();
  }

  public get theme() {
    return (localStorage.getItem("theme") ?? "system") as Theme;
  }

  private detectTheme() {
    const appearance = this.theme;
    const prefersDark = appearance === 'system' ? window.matchMedia('(prefers-color-scheme: dark)').matches : (appearance === "dark");
    if (prefersDark) {
      this.document.documentElement.classList.add('dark');
    } else {
      this.document.documentElement.classList.remove('dark');
    }
  }
}
