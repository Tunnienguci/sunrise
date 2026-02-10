import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink, ActivatedRoute, RouterOutlet, RouterLinkActive } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { HotelService } from '../../core/services';
import { TranslatePipe } from '../../core/pipes/translate.pipe';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
    selector: 'sunrise-hotel-detail',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, RouterLink, NgOptimizedImage, TranslatePipe, ButtonComponent, RouterOutlet, RouterLinkActive],
    templateUrl: './hotel-detail.component.html',
    styleUrl: './hotel-detail.component.scss'
})
export class HotelDetailComponent {
    private readonly route = inject(ActivatedRoute);
    private readonly hotelService = inject(HotelService);

    private readonly params = toSignal(this.route.paramMap);

    protected readonly hotel = computed(() => {
        const p = this.params();
        const id = p?.get('id');
        return id ? this.hotelService.getHotelById(id) : undefined;
    });
}
