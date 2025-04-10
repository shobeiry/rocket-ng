import {Component, computed, inject, input, model} from '@angular/core';
import {ControlValueAccessor, NgControl} from '@angular/forms';
import {cn} from '@shared/utils';
import {InputErrorTranslatorPipe} from '@shared/components/input/input-error-translator.pipe';

@Component({
  selector: 'rc-input',
  imports: [
    InputErrorTranslatorPipe
  ],
  template: `
    <input
      [type]="type()" [class]="mergedClass()" [value]="value" [disabled]="disabled()"
      [attr.placeholder]="placeholder()" [attr.aria-invalid]="control?.invalid"
      (input)="onInput($event)" (blur)="onTouched()"/>
    @if (control && control.errors) {
      <p class="text-sm text-red-500 mt-2">
        {{ control.errors | inputErrorTranslator }}
      </p>
    }
  `,
})
export class InputComponent implements ControlValueAccessor {
  ngControl: NgControl = inject(NgControl, {self: true});
  class = input<string>();
  type = input<string | undefined>();
  placeholder = input<string>();
  disabled = model(false)

  mergedClass = computed(() => cn(
    "border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0",
    "rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0",
    "file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
    "aria-invalid:border-destructive", this.class()
  ))

  value: any = '';

  constructor() {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  get control() {
    return this.ngControl?.control;
  }

  onChange = (value: any) => {
  };
  onTouched = () => {
  };

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
  }
}
