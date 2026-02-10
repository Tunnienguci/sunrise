import { Component, ChangeDetectionStrategy, input, signal, forwardRef, ElementRef, inject, HostListener, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { TranslatePipe } from '../../../core/pipes/translate.pipe';

export interface SelectItem {
    label: string;
    value: any;
}

@Component({
    selector: 'sunrise-select',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, TranslatePipe],
    templateUrl: './select.component.html',
    styleUrl: './select.component.scss',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectComponent),
            multi: true
        }
    ]
})
export class SelectComponent implements ControlValueAccessor {
    readonly items = input.required<SelectItem[]>();
    readonly placeholder = input<string>('');
    readonly icon = input<string>(); // Used for logic if needed, but template will handle image loading.

    protected readonly isOpen = signal(false);
    protected readonly value = signal<any>(null);

    private readonly elementRef = inject(ElementRef);

    // Computed label for optimization
    protected readonly selectedLabel = computed(() => {
        const val = this.value();
        const list = this.items();
        const item = list.find(i => i.value === val);
        return item ? item.label : this.placeholder();
    });

    private onChange: (value: any) => void = () => { };
    private onTouched: () => void = () => { };

    writeValue(val: any): void {
        this.value.set(val);
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    toggle(event?: MouseEvent): void {
        if (event) {
            event.stopPropagation();
        }
        if (this.isOpen()) {
            this.close();
        } else {
            this.open();
        }
    }

    open(): void {
        if (!this.isOpen()) {
            this.isOpen.set(true);
            this.onTouched();
        }
    }

    close(): void {
        if (this.isOpen()) {
            this.isOpen.set(false);
        }
    }

    select(item: SelectItem, event?: Event): void {
        if (event) {
            event.stopPropagation();
        }
        this.value.set(item.value);
        this.onChange(item.value);
        this.close();
    }

    @HostListener('document:click', ['$event'])
    onClickOutside(event: MouseEvent): void {
        if (this.isOpen() && !this.elementRef.nativeElement.contains(event.target)) {
            this.close();
        }
    }
}
