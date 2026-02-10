import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'; // Import NgOptimizedImage
import { FacilityService } from '../../../../core/services';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';

@Component({
  selector: 'sunrise-services-section', // New selector
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, SectionHeadingComponent, NgOptimizedImage], // Added NgOptimizedImage
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.scss'
})
export class ServicesSectionComponent {
  protected readonly facilityService = inject(FacilityService);
}
