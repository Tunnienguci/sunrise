import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { ServicesSectionComponent } from './sections/services-section/services-section.component';
import { ExploreSectionComponent } from './sections/explore-section/explore-section.component';
import { PartnersSectionComponent } from './sections/partners-section/partners-section.component';
import { TestimonialSectionComponent } from './sections/testimonial-section/testimonial-section.component';

@Component({
  selector: 'sunrise-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroSectionComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    ExploreSectionComponent,
    PartnersSectionComponent,
    TestimonialSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent { }
