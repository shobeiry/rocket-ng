import {ChangeDetectionStrategy, Component, computed, forwardRef, input, model} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {cn} from '@shared/utils';
import {CheckIcon, LucideAngularModule} from 'lucide-angular';

@Component({
  selector: 'rc-checkbox',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  class = input<string>();
  disabled = model(false)
  checked = model(false)
  readonly CheckIcon = CheckIcon;

  mergedClass = computed(() => cn(
    "relative inline-flex items-center justify-center size-4 shrink-0 rounded border shadow-xs outline-none transition-shadow focus-visible:ring-[3px]",
    "focus-visible:ring-ring/50 border-input aria-checked:bg-primary aria-checked:text-primary-foreground aria-checked:border-primary aria-invalid:ring-destructive/20",
    "dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive disabled:cursor-not-allowed disabled:opacity-50 peer",
    this.checked() ? 'bg-primary text-white border-primary' : "",
    this.disabled() ? 'cursor-not-allowed opacity-50' : "",
    this.class()
  ));


  onChange = (value: any) => {
  };
  onTouched = () => {
  };

  toggleCheck() {
    if (this.disabled()) return;
    this.checked.set(!this.checked());
    this.onChange(this.checked());
    this.onTouched();
  }

  writeValue(obj: any): void {
    this.checked.set(!!obj);
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
}
