import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';
import { HotelService } from '../../../../core/services/hotel.service';

@Component({
  selector: 'sunrise-hotel-overview',
  imports: [CommonModule],
  template: `
    <div class="overview-content space-y-8 animate-fade-in" *ngIf="hotel() as h">
      <section>
        <h3 class="text-2xl font-serif font-bold mb-4 text-primary">About {{ h.name }}</h3>
        <p class="text-text-secondary leading-relaxed text-lg">{{ h.description }}</p>
      </section>

      <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-gray-50 p-6 rounded-xl">
          <h4 class="text-xl font-medium mb-4">Amenities</h4>
          <ul class="grid grid-cols-2 gap-3">
            <li *ngFor="let amenity of h.amenities" class="flex items-center text-text-secondary">
              <span class="w-2 h-2 bg-accent rounded-full mr-3"></span>
              {{ amenity }}
            </li>
          </ul>
        </div>
        
        <div class="bg-gray-50 p-6 rounded-xl">
          <h4 class="text-xl font-medium mb-4">Location</h4>
          <p class="text-text-secondary mb-2">{{ h.location }}</p>
          <div class="mt-4 aspect-video bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
             <!-- Placeholder for Map -->
             Map View
          </div>
        </div>
      </section>

      <section *ngIf="h.policies.length">
         <h4 class="text-xl font-medium mb-4">Hotel Policies</h4>
         <ul class="list-disc pl-5 space-y-2 text-text-secondary">
            <li *ngFor="let policy of h.policies">{{ policy }}</li>
         </ul>
      </section>
    </div>
  `,
  styles: [`
    :host { display: block; }
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
