import {Component, contentChild, TemplateRef} from '@angular/core';
import {NgTemplateOutlet} from '@angular/common';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'rc-dropdown',
  imports: [
    NgTemplateOutlet
  ],
  template: `
    <div class="inline-block ltr:text-left rtl:text-right">
      <div (click)="toggle()">
        <ng-content></ng-content>
      </div>
      <div [@toggle]="isOpen ? 'open' : 'close'" class="absolute rtl:right-0 ltr:left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
        <div class="py-1" role="none" (click)="toggle()">
          <ng-template [ngTemplateOutlet]="menu() || empty"/>
        </div>
      </div>
    </div>
    <ng-template #empty></ng-template>
  `,
  animations: [
    trigger('toggle', [
      state(
        'open',
        style({
          opacity: 1,
          visibility: 'visible',
          transform: 'scale(1)',
        })
      ),
      state(
        'close',
        style({
          opacity: 0,
          visibility: 'hidden',
          transform: 'scale(0.95)',
        })
      ),
      transition('close => open', [
        animate('100ms ease-out')
      ]),
      transition('open => close', [
        animate('75ms ease-in')
      ])
    ])
  ]
})
export class DropdownComponent {
  public menu = contentChild.required<TemplateRef<any>>("menu");
  isOpen = false;

  toggle = () => this.isOpen = !this.isOpen;
  protected readonly close = close;
}
