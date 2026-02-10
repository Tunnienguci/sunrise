import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { HotelService } from '../../../../core/services/hotel.service';

@Component({
  selector: 'sunrise-hotel-reviews',
  imports: [DatePipe],
  template: `
    @if (hotel(); as h) {
    <div class="reviews">
      <div class="reviews__header">
        <h3 class="reviews__heading">Đánh giá của khách</h3>
        <div class="reviews__score">
           <span class="reviews__score-val">{{ h.rating }}</span>
           <span class="reviews__score-max">/ 5.0</span>
        </div>
      </div>

      @if (!h.reviews.length) {
        <div class="reviews__empty">
          <p>Chưa có đánh giá nào. Hãy là người đầu tiên!</p>
        </div>
      }

      <div class="reviews__list">
        @for (review of h.reviews; track review.id) {
        <div class="review-card">
          <div class="review-card__header">
            <div class="review-card__avatar-wrap">
               <img [src]="review.avatar" [alt]="review.author" class="review-card__avatar" />
            </div>
            <div class="review-card__meta">
              <h5 class="review-card__author">{{ review.author }}</h5>
              <p class="review-card__date">{{ review.date | date:'mediumDate' }}</p>
            </div>
            <div class="review-card__stars">
               @for (star of [1,2,3,4,5]; track star) {
                 <span>★</span>
               }
            </div>
          </div>
          <p class="review-card__comment">"{{ review.comment }}"</p>
        </div>
        }
      </div>
    </div>
    }
  `,
  styles: [`
    .reviews {
      animation: fadeIn 0.4s ease;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .reviews__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2rem;
    }
    .reviews__heading {
      font-family: 'Playfair Display', serif;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-primary, #1a1a1a);
    }
    .reviews__score {
      display: flex;
      align-items: center;
      gap: 0.35rem;
      background: rgba(200,230,72,0.1);
      padding: 0.5rem 1rem;
      border-radius: 12px;
    }
    .reviews__score-val {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-primary, #1a1a1a);
    }
    .reviews__score-max {
      font-size: 0.875rem;
      color: var(--color-text-secondary, #555);
    }
    .reviews__empty {
      padding: 2rem;
      text-align: center;
      background: #f9fafb;
      border-radius: 16px;
      color: var(--color-text-secondary, #555);
    }
    .reviews__list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .review-card {
      background: #fff;
      padding: 1.5rem;
      border-radius: 16px;
      border: 1px solid #f0f0f0;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .review-card__header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    .review-card__avatar-wrap {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      overflow: hidden;
      background: #e5e7eb;
      flex-shrink: 0;
    }
    .review-card__avatar {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .review-card__meta {
      flex: 1;
    }
    .review-card__author {
      font-weight: 700;
      color: var(--color-primary, #1a1a1a);
      margin: 0;
    }
    .review-card__date {
      font-size: 0.75rem;
      color: var(--color-text-muted, #888);
      margin: 0;
    }
    .review-card__stars {
      display: flex;
      gap: 0.15rem;
      color: var(--color-accent, #c8e648);
      font-size: 1rem;
    }
    .review-card__comment {
      color: var(--color-text-secondary, #555);
      line-height: 1.7;
    }
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
