import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { CommonModule, NgOptimizedImage, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { HotelService } from '../../../../core/services/hotel.service';

@Component({
  selector: 'sunrise-hotel-reviews',
  imports: [CommonModule, NgOptimizedImage, DatePipe],
  template: `
    <div class="reviews-content space-y-8 animate-fade-in" *ngIf="hotel() as h">
      <div class="flex items-center justify-between mb-8">
        <h3 class="text-2xl font-serif font-bold text-primary">Guest Reviews</h3>
        <div class="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-lg">
           <span class="text-2xl font-bold text-primary">{{ h.rating }}</span>
           <span class="text-sm text-text-secondary">/ 5.0</span>
        </div>
      </div>

      <div *ngIf="!h.reviews.length" class="p-8 text-center bg-gray-50 rounded-xl">
        <p class="text-text-secondary">No reviews yet. Be the first to review!</p>
      </div>

      <div class="grid grid-cols-1 gap-6">
        <div *ngFor="let review of h.reviews" class="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div class="flex items-center gap-4 mb-4">
            <div class="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
               <img [ngSrc]="review.avatar" [alt]="review.author" width="48" height="48" class="object-cover">
            </div>
            <div>
              <h5 class="font-bold text-primary">{{ review.author }}</h5>
              <p class="text-xs text-text-muted">{{ review.date | date:'mediumDate' }}</p>
            </div>
            <div class="ml-auto flex gap-1 text-accent">
               <span *ngFor="let star of [1,2,3,4,5]">★</span>
            </div>
          </div>
          <p class="text-text-secondary leading-relaxed">"{{ review.comment }}"</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelReviewsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly hotelService = inject(HotelService);

  private readonly hotelId = toSignal(
    this.route.parent!.paramMap.pipe(map(p => p.get('id')))
  );

  hotel = computed(() => {
    const id = this.hotelId();
    return id ? this.hotelService.getHotelById(id) : undefined;
  });
}
