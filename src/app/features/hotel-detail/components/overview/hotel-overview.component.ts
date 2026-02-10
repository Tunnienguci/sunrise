import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { HotelService } from '../../../../core/services/hotel.service';

@Component({
  selector: 'sunrise-hotel-overview',
  imports: [],
  template: `
    @if (hotel(); as h) {
    <div class="overview">
      <section class="overview__section">
        <h3 class="overview__heading">About {{ h.name }}</h3>
        <p class="overview__description">{{ h.description }}</p>
      </section>

      <div class="overview__grid">
        <section class="overview__box">
          <h4 class="overview__box-title">Tiện nghi</h4>
          <ul class="overview__amenities">
            @for (amenity of h.amenities; track amenity) {
              <li class="overview__amenity">
                <span class="overview__amenity-dot"></span>
                {{ amenity }}
              </li>
            }
          </ul>
        </section>

        <section class="overview__box">
          <h4 class="overview__box-title">Vị trí</h4>
          <p class="overview__location-text">{{ h.location }}</p>
          <div class="overview__map-placeholder">
             Map View
          </div>
        </section>
      </div>

      @if (h.policies.length) {
      <section class="overview__section">
         <h4 class="overview__box-title">Chính sách</h4>
         <ul class="overview__policies">
            @for (policy of h.policies; track policy) {
              <li>{{ policy }}</li>
            }
         </ul>
      </section>
      }
    </div>
    }
  `,
  styles: [`
    .overview {
      animation: fadeIn 0.4s ease;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .overview__section {
      margin-bottom: 2rem;
    }
    .overview__heading {
      font-family: 'Playfair Display', serif;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--color-primary, #1a1a1a);
    }
    .overview__description {
      color: var(--color-text-secondary, #555);
      line-height: 1.7;
      font-size: 1.1rem;
    }
    .overview__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      margin-bottom: 2rem;
    }
    @media (min-width: 768px) {
      .overview__grid { grid-template-columns: repeat(2, 1fr); }
    }
    .overview__box {
      background: #f9fafb;
      padding: 1.5rem;
      border-radius: 16px;
    }
    .overview__box-title {
      font-size: 1.25rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }
    .overview__amenities {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.75rem;
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .overview__amenity {
      display: flex;
      align-items: center;
      color: var(--color-text-secondary, #555);
      font-size: 0.9rem;
    }
    .overview__amenity-dot {
      width: 8px;
      height: 8px;
      background: var(--color-accent, #c8e648);
      border-radius: 50%;
      margin-right: 0.75rem;
      flex-shrink: 0;
    }
    .overview__location-text {
      color: var(--color-text-secondary, #555);
      margin-bottom: 0.75rem;
    }
    .overview__map-placeholder {
      margin-top: 1rem;
      aspect-ratio: 16/9;
      background: #e5e7eb;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #9ca3af;
      font-size: 0.875rem;
    }
    .overview__policies {
      list-style: disc;
      padding-left: 1.25rem;
      color: var(--color-text-secondary, #555);
    }
    .overview__policies li {
      padding: 0.35rem 0;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelOverviewComponent {
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
