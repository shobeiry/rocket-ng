import {Directive, effect, ElementRef, inject, input, OnInit, WritableSignal} from '@angular/core';
import {TranslatorService} from './translator.service';
import {ObjectType} from '@shared/utils/types';

@Directive({
  selector: '[trans],trans'
})
export class TransDirective implements OnInit {
  private translator: TranslatorService = inject(TranslatorService);
  private el: ElementRef = inject(ElementRef);
  private translate!: WritableSignal<string>;
  public trans = input<string>();
  public transParams = input<ObjectType<string>>();


  constructor() {
    effect(() => {
      this.el.nativeElement.innerText = this.translate ? this.translate() : "";
    });

  }

  ngOnInit() {
    this.translate = this.translator.trans(this.trans()?.trim() == "" ? this.el.nativeElement.innerText : this.trans(), this.transParams());
  }
}
