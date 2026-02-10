import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'sunrise-facilities',
    imports: [],
    template: `
    <div class="facilities-page">
       <h1 class="facilities-page__title">Facilities</h1>
        <div class="facilities-page__grid">
            <div class="facility-item">
                <div class="facility-item__img-wrap">
                   <img src="https://media.sixsenses.com/B60H3R33/at/qng6fb544nfrg7s3pbkhvhnv/krabey-island-cambodia_Snorkeling2.jpg?format=webp&width=790&height=987&fit=crop"
                        alt="Infinity Pool overlooking the bay" class="facility-item__img" loading="lazy" />
                </div>
                <h3 class="facility-item__name">Infinity Pools</h3>
                <p class="facility-item__desc">Swim amidst the clouds in our signature infinity pools with breathtaking views of Ninh Van Bay.</p>
            </div>
             <div class="facility-item">
                <div class="facility-item__img-wrap">
                   <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80"
                        alt="Six Senses Spa treatment" class="facility-item__img" loading="lazy" />
                </div>
                <h3 class="facility-item__name">Six Senses Spa</h3>
                <p class="facility-item__desc">A sanctuary for the senses, offering traditional Vietnamese treatments and integrated wellness programs.</p>
            </div>
            <div class="facility-item">
                <div class="facility-item__img-wrap">
                   <img src="https://www.sixsenses.com/images/Box-text-image-medium-1.jpg"
                        alt="Yoga pavilion by the ocean" class="facility-item__img" loading="lazy" />
                </div>
                <h3 class="facility-item__name">Yoga & Meditation</h3>
                <p class="facility-item__desc">Begin your day with sunrise yoga sessions in our overwater pavilion, surrounded by the calming ocean.</p>
            </div>
            <div class="facility-item">
                <div class="facility-item__img-wrap">
                   <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                        alt="Fine dining restaurant" class="facility-item__img" loading="lazy" />
                </div>
                <h3 class="facility-item__name">Dining Experiences</h3>
                <p class="facility-item__desc">International fusion dishes with a focus on fresh, local seafood and organic produce from our garden.</p>
            </div>
        </div>
    </div>
  `,
    styles: [`
    .facilities-page {
      max-width: 1320px;
      margin: 0 auto;
      padding: 4rem 1rem;
      animation: fadeIn 0.4s ease;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .facilities-page__title {
      font-family: 'Playfair Display', serif;
      font-size: 2.5rem;
      font-weight: 700;
      text-align: center;
      color: var(--color-primary, #1a1a1a);
      margin-bottom: 3rem;
    }
    .facilities-page__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    @media (min-width: 768px) {
      .facilities-page__title { font-size: 3rem; }
      .facilities-page__grid { grid-template-columns: repeat(2, 1fr); }
    }
    .facility-item__img-wrap {
      aspect-ratio: 16/9;
      border-radius: 16px;
      overflow: hidden;
    }
    .facility-item__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
    .facility-item:hover .facility-item__img {
      transform: scale(1.03);
    }
    .facility-item__name {
      font-family: 'Playfair Display', serif;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--color-primary, #1a1a1a);
      margin: 1rem 0 0.5rem;
    }
    .facility-item__desc {
      color: var(--color-text-secondary, #555);
      line-height: 1.6;
    }
  `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FacilitiesComponent { }
