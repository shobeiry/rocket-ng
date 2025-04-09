import {Component, computed, input} from '@angular/core';
import {cn} from '@shared/utils';
import {RouterLink, UrlTree} from '@angular/router';

@Component({
  selector: 'rc-text-link',
  imports: [
    RouterLink
  ],
  template: `
    <a [routerLink]="route()" [class]="mergedClass()">
      <ng-content/>
    </a>`,
})
export class TextLinkComponent {
  class = input<string>();
  route = input<any[] | string | UrlTree | null | undefined>();

  mergedClass = computed(() => cn(
    "text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500 cursor-pointer",
    this.class()
  ))
}
