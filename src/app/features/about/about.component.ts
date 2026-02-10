import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sunrise-about',
  imports: [],
  template: `
    <div class="about-page">
      <h1 class="about-page__title">About Sunrise</h1>
      <div class="about-page__content">
        <p>Founded with a passion for exceptional hospitality, Sunrise Hotel Group has been a beacon of luxury and comfort in Vietnam.</p>
        <p>Our mission is to provide unforgettable experiences that blend modern elegance with the warmth of traditional Vietnamese culture. Whether you are seeking a peaceful retreat in Ninh Van Bay or a vibrant city escape in Saigon, our properties offer the perfect sanctuary.</p>
        <p>We are committed to sustainable tourism and preserving the natural beauty of our locations for future generations.</p>
      </div>
    </div>
  `,
  styles: [`
    .about-page {
      max-width: 1320px;
      margin: 0 auto;
      padding: 4rem 1rem;
      animation: fadeIn 0.4s ease;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .about-page__title {
      font-family: 'Playfair Display', serif;
      font-size: 2.5rem;
      font-weight: 700;
      text-align: center;
      color: var(--color-primary, #1a1a1a);
      margin-bottom: 3rem;
    }
    .about-page__content {
      max-width: 48rem;
      margin: 0 auto;
      font-size: 1.125rem;
      color: var(--color-text-secondary, #555);
      line-height: 1.8;
    }
    .about-page__content p {
      margin-bottom: 1.5rem;
    }
    @media (min-width: 768px) {
      .about-page__title { font-size: 3rem; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent { }
