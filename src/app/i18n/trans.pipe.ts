import {ChangeDetectorRef, effect, inject, Pipe, PipeTransform, WritableSignal} from '@angular/core';
import {ObjectType} from '@shared/utils/types';
import {TranslatorService} from './translator.service';
import {TranslatorSection} from './models';
import {ValidationErrors} from '@angular/forms';

@Pipe({
  name: 'trans',
  pure: false
})
export class TransPipe implements PipeTransform {
  private translator: TranslatorService = inject(TranslatorService);
  private ref: ChangeDetectorRef = inject(ChangeDetectorRef);
  private translate!: WritableSignal<string>;
  private result: string = "";

  constructor() {
    effect(() => {
      this.result = this.translate();
      this.ref.markForCheck();
    });
  }

  transform(value: string | ValidationErrors, params?: ObjectType<any>, section: TranslatorSection = "vocabs") {
    if (typeof value !== 'string') {
      const key = Object.keys(value)[0];
      params = {...value[key]};
      value = key;
    }

    this.translate = this.translator.trans(value, params, section);
    return this.result = this.translate();
  }

}
