import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { PARTNERS } from '../../../../core/constants';

@Component({
  selector: 'sunrise-partners-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeadingComponent, ButtonComponent, NgOptimizedImage],
  templateUrl: './partners-section.component.html',
  styleUrl: './partners-section.component.scss'
})
export class PartnersSectionComponent {
  protected readonly partners = PARTNERS;
}
