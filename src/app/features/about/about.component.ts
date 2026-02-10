import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sunrise-about',

  imports: [CommonModule],
  template: `
    <div class="max-w-[1320px] mx-auto px-4 py-16 animate-fade-in">
      <h1 class="font-serif text-4xl md:text-5xl font-bold text-center text-primary mb-12">About Sunrise</h1>
      <div class="prose max-w-3xl mx-auto text-lg text-text-secondary leading-relaxed space-y-6">
        <p>Founded with a passion for exceptional hospitality, Sunrise Hotel Group has been a beacon of luxury and comfort in Vietnam.</p>
        <p>Our mission is to provide unforgettable experiences that blend modern elegance with the warmth of traditional Vietnamese culture. Whether you are seeking a peaceful retreat in Ninh Van Bay or a vibrant city escape in Saigon, our properties offer the perfect sanctuary.</p>
        <p>We are committed to sustainable tourism and preserving the natural beauty of our locations for future generations.</p>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent { }
