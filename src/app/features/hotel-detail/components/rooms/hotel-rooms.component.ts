import { Component, ChangeDetectionStrategy, inject, computed, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { HotelService } from '../../../../core/services/hotel.service';
import { Room } from '../../../../core/interfaces';

@Component({
  selector: 'sunrise-hotel-rooms',
  imports: [DecimalPipe],
  template: `
    @if (hotel(); as h) {
    <div class="rooms-content">
      <h3 class="rooms-content__heading">Chỗ ở</h3>
      <p class="rooms-content__subheading">Tất cả các căn biệt thự đều rộng rãi, sang trọng, hướng về phía biển</p>

      @if (!h.rooms.length) {
        <div class="rooms-empty">
          <p>Thông tin chi tiết phòng sẽ được cập nhật sớm.</p>
        </div>
      }

      <div class="rooms-list">
        @for (room of h.rooms; track room.id; let i = $index) {
          <article class="room-card" [class.room-card--expanded]="expandedRoom() === room.id">
            <!-- Main card -->
            <div class="room-card__main">
              <div class="room-card__gallery">
                <img [src]="room.imageUrl" [alt]="room.name" class="room-card__image" loading="lazy" />
                @if (room.images && room.images.length > 1) {
                  <span class="room-card__photo-count">{{ room.images.length }} ảnh</span>
                }
              </div>
              <div class="room-card__info">
                <div class="room-card__header">
                  <div>
                    <h4 class="room-card__name">{{ room.name }}</h4>
                    <div class="room-card__meta">
                      <span>{{ room.size }}</span>
                      <span class="room-card__dot">·</span>
                      @if (room.bedrooms) {
                        <span>{{ room.bedrooms }} phòng ngủ</span>
                        <span class="room-card__dot">·</span>
                      }
                      <span>Tối đa {{ room.occupancy }} khách</span>
                      @if (room.view) {
                        <span class="room-card__dot">·</span>
                        <span>{{ room.view }}</span>
                      }
                    </div>
                  </div>
                  <div class="room-card__pricing">
                    <p class="room-card__price">{{ room.price | number }}$</p>
                    <p class="room-card__price-note">mỗi đêm</p>
                  </div>
                </div>

                @if (room.description) {
                  <p class="room-card__desc">{{ room.description }}</p>
                }

                <div class="room-card__amenities">
                  @for (am of room.amenities; track am) {
                    <span class="room-card__amenity">{{ am }}</span>
                  }
                </div>

                <div class="room-card__actions">
                  <button class="room-card__btn-detail"
                    (click)="toggleRoom(room.id)" type="button">
                    {{ expandedRoom() === room.id ? 'Ẩn ảnh' : 'Xem ảnh chi tiết' }}
                  </button>
                  <button class="room-card__btn-book" type="button">
                    Đặt phòng
                  </button>
                </div>
              </div>
            </div>

            <!-- Expanded gallery -->
            @if (expandedRoom() === room.id && room.images) {
              <div class="room-card__expanded-gallery">
                @for (img of room.images; track img; let j = $index) {
                  <div class="room-card__gallery-item">
                    <img [src]="img" [alt]="room.name + ' - ảnh ' + (j + 1)"
                         class="room-card__gallery-img" loading="lazy" />
                  </div>
                }
              </div>
            }
          </article>
        }
      </div>
    </div>
    }
  `,
  styles: [`
    .rooms-content {
      animation: fadeIn 0.4s ease;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .rooms-content__heading {
      font-family: 'Playfair Display', serif;
      font-size: 1.75rem;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 0.5rem;
    }
    .rooms-content__subheading {
      font-size: 0.9rem;
      color: #888;
      margin-bottom: 2rem;
    }

    .rooms-empty {
      padding: 3rem;
      text-align: center;
      background: #f9f9f9;
      border-radius: 16px;
      color: #888;
    }

    .rooms-list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .room-card {
      background: #fff;
      border: 1px solid #eee;
      border-radius: 20px;
      overflow: hidden;
      transition: box-shadow 0.3s ease;

      &:hover {
        box-shadow: 0 8px 24px rgba(0,0,0,0.08);
      }
    }
    .room-card__main {
      display: flex;
      flex-direction: column;
    }
    @media (min-width: 768px) {
      .room-card__main {
        flex-direction: row;
      }
    }

    .room-card__gallery {
      position: relative;
      height: 260px;
      overflow: hidden;
      flex-shrink: 0;
    }
    @media (min-width: 768px) {
      .room-card__gallery {
        width: 42%;
        height: auto;
        min-height: 300px;
      }
    }
    .room-card__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;

      .room-card:hover & {
        transform: scale(1.03);
      }
    }
    .room-card__photo-count {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      background: rgba(0,0,0,0.6);
      color: #fff;
      font-size: 0.75rem;
      font-weight: 500;
      padding: 0.35rem 0.75rem;
      border-radius: 100px;
      backdrop-filter: blur(4px);
    }

    .room-card__info {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
    }

    .room-card__header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    .room-card__name {
      font-family: 'Playfair Display', serif;
      font-size: 1.25rem;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 0.4rem;
    }
    .room-card__meta {
      display: flex;
      flex-wrap: wrap;
      gap: 0.25rem;
      font-size: 0.8rem;
      color: #888;
    }
    .room-card__dot {
      margin: 0 0.15rem;
    }

    .room-card__pricing {
      text-align: right;
      flex-shrink: 0;
    }
    .room-card__price {
      font-size: 1.25rem;
      font-weight: 700;
      color: #1a1a1a;
    }
    .room-card__price-note {
      font-size: 0.75rem;
      color: #aaa;
    }

    .room-card__desc {
      font-size: 0.875rem;
      color: #666;
      line-height: 1.7;
      margin-bottom: 1rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .room-card__amenities {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      margin-bottom: 1.25rem;
    }
    .room-card__amenity {
      font-size: 0.75rem;
      padding: 0.3rem 0.75rem;
      background: #f5f5f5;
      border-radius: 100px;
      color: #555;
      font-weight: 500;
    }

    .room-card__actions {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
    }
    .room-card__btn-detail {
      padding: 0.65rem 1.25rem;
      border: 1px solid #ddd;
      border-radius: 12px;
      background: #fff;
      font-size: 0.85rem;
      font-weight: 500;
      cursor: pointer;
      color: #1a1a1a;
      transition: all 0.2s ease;

      &:hover {
        background: #f5f5f5;
        border-color: #1a1a1a;
      }
    }
    .room-card__btn-book {
      padding: 0.65rem 1.5rem;
      border: none;
      border-radius: 12px;
      background: #1a1a1a;
      color: #fff;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s ease;

      &:hover {
        background: #333;
      }
    }

    /* Expanded Gallery */
    .room-card__expanded-gallery {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.5rem;
      padding: 0.5rem 1rem 1rem;
      animation: fadeIn 0.3s ease;
    }
    @media (max-width: 640px) {
      .room-card__expanded-gallery {
        grid-template-columns: 1fr;
      }
    }
    .room-card__gallery-item {
      border-radius: 12px;
      overflow: hidden;
      aspect-ratio: 16/10;
    }
    .room-card__gallery-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelRoomsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly hotelService = inject(HotelService);

  private readonly hotelId = toSignal(
    this.route.parent!.paramMap.pipe(map(p => p.get('id')))
  );

  hotel = computed(() => {
    const id = this.hotelId();
    return id ? this.hotelService.getHotelById(id) : undefined;
  });

  readonly expandedRoom = signal<string | null>(null);

  toggleRoom(roomId: string): void {
    this.expandedRoom.update(current => current === roomId ? null : roomId);
  }
}
