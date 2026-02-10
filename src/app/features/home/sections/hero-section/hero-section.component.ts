import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { HotelService } from '../../../../core/services';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { SelectComponent } from '../../../../shared/components/select/select.component';
import { HotelType } from '../../../../core/interfaces/hotel.interface';
import { TranslatePipe } from '../../../../core/pipes/translate.pipe';
import { HERO_LOCATIONS, HERO_TYPES, HERO_PRICES } from '../../../../core/constants/hero.constant';

@Component({
  selector: 'sunrise-hero-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ButtonComponent, NgOptimizedImage, TranslatePipe, SelectComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  private readonly hotelService = inject(HotelService);

  protected readonly locationControl = new FormControl('', { nonNullable: true });
  protected readonly typeControl = new FormControl<HotelType | ''>('', { nonNullable: true });
  protected readonly priceTypeControl = new FormControl('', { nonNullable: true });
  protected readonly dateControl = new FormControl('', { nonNullable: true });

  // Use constants
  readonly locations = HERO_LOCATIONS;
  readonly types = HERO_TYPES;
  readonly prices = HERO_PRICES;

  protected onSearch(): void {
    const priceType = this.priceTypeControl.value;
    let priceMin = 0;
    let priceMax = 50000;

    if (priceType) {
      const parts = priceType.split('-');
      if (parts.length === 2) {
        priceMin = Number(parts[0]);
        priceMax = Number(parts[1]);
      } else if (parts.length === 1 && priceType.startsWith('1000-')) {
        priceMin = 1000;
        priceMax = 50000;
      }
    }

    this.hotelService.updateSearchParams({
      location: this.locationControl.value,
      type: this.typeControl.value,
      priceMin,
      priceMax
    });

    const element = document.getElementById('explore');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
