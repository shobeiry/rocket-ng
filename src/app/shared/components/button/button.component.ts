import {Component, computed, input} from '@angular/core';
import {cn} from '@shared/utils';

type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
type ButtonSize = "default" | "sm" | "lg" | "icon";

@Component({
  selector: 'rc-button',
  imports: [],
  host: {class: "test"},
  template: `
    <button [attr.type]="type()" [disabled]="disabled() || loading()" [class]="mergedClasses()">
      @if (loading()) {
        <svg class="animate-spin size-4 shrink-0" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z">
          </path>
        </svg>
      }

      <ng-content/>
    </button>`,
})
export class ButtonComponent {
  class = input<string>();
  disabled = input<boolean>(false);
  type = input<"button" | "submit" | "reset">("button");
  variant = input<ButtonVariant>("default");
  size = input<ButtonSize>("default");
  loading = input<boolean>(false);

  protected mergedClasses = computed(() => cn("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow]",
    "disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
    "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20",
    "dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", this.variants[this.variant()], this.sizes[this.size()], this.class(), this.disabled() ? '' : 'cursor-pointer')
  )

  private variants: Record<ButtonVariant, string> = {
    default:
      "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
    destructive:
      "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
    outline:
      "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
    secondary:
      "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  };
  private sizes: Record<ButtonSize, string> = {
    default: "h-9 px-4 py-2 has-[>svg]:px-3",
    sm: "h-8 rounded-md px-3 has-[>svg]:px-2.5",
    lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
    icon: "size-9",
  }
}
