import { Component, ChangeDetectionStrategy, inject, ViewChild, ElementRef } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { HotelService } from '../../../../core/services';
import { HotelCardComponent } from '../../../../shared/components/hotel-card/hotel-card.component';
import { CarouselControlsComponent } from '../../../../shared/components/carousel-controls/carousel-controls.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { TranslatePipe } from '../../../../core/pipes/translate.pipe';

@Component({
  selector: 'sunrise-explore-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HotelCardComponent, CarouselControlsComponent, ButtonComponent, NgOptimizedImage, TranslatePipe],
  templateUrl: './explore-section.component.html',
  styleUrl: './explore-section.component.scss'
})
export class ExploreSectionComponent {
  private readonly hotelService = inject(HotelService);
  protected readonly hotels = this.hotelService.filteredHotels;

  @ViewChild('grid', { static: true }) grid!: ElementRef<HTMLElement>;

  protected scrollLeft(): void {
    if (this.grid?.nativeElement) {
      this.grid.nativeElement.scrollBy({ left: -360, behavior: 'smooth' });
    }
  }

  protected scrollRight(): void {
    if (this.grid?.nativeElement) {
      this.grid.nativeElement.scrollBy({ left: 360, behavior: 'smooth' });
    }
  }
}
