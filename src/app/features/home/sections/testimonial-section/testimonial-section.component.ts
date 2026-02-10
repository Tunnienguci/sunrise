import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TestimonialService } from '../../../../core/services';
import { CarouselControlsComponent } from '../../../../shared/components/carousel-controls/carousel-controls.component';

@Component({
  selector: 'sunrise-testimonial-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CarouselControlsComponent, NgOptimizedImage],
  templateUrl: './testimonial-section.component.html',
  styleUrl: './testimonial-section.component.scss'
})
export class TestimonialSectionComponent {
  protected readonly testimonialService = inject(TestimonialService);
}
