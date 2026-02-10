import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'; // Import NgOptimizedImage
import { FOOTER_LINKS, SOCIAL_LINKS } from '../../core/constants';

@Component({
  selector: 'sunrise-footer', // New selector
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NgOptimizedImage], // Add NgOptimizedImage
  templateUrl: './footer.component.html', // Separate template
  styleUrl: './footer.component.scss' // Separate styles
})
export class FooterComponent {
  protected readonly footerGroups = [
    { title: 'footer.company', items: FOOTER_LINKS.company },
    { title: 'footer.support', items: FOOTER_LINKS.support },
    { title: 'footer.services', items: FOOTER_LINKS.services },
  ];
  protected readonly socialLinks = SOCIAL_LINKS;
  protected readonly currentYear = new Date().getFullYear();
}
