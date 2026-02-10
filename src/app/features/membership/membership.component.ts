import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'sunrise-membership',
    imports: [],
    template: `
    <div class="membership-page">
       <h1 class="membership-page__title">Membership</h1>
       <p class="membership-page__subtitle">Join the Sunrise Elite Club for exclusive benefits, priority booking, and special rates.</p>

       <div class="membership-page__cards">
          <div class="plan-card">
              <h3 class="plan-card__name">Silver</h3>
              <p class="plan-card__price">Free</p>
              <ul class="plan-card__list">
                  <li>✓ Member-only rates</li>
                  <li>✓ Early check-in (subject to availability)</li>
              </ul>
              <button class="plan-card__btn plan-card__btn--outline" type="button">Join Now</button>
          </div>
           <div class="plan-card plan-card--featured">
              <h3 class="plan-card__name plan-card__name--accent">Gold</h3>
              <p class="plan-card__price">$200<span class="plan-card__period">/year</span></p>
              <ul class="plan-card__list">
                  <li>✓ All Silver benefits</li>
                  <li>✓ Room upgrades</li>
                  <li>✓ Late check-out</li>
                  <li>✓ Welcome amenity</li>
              </ul>
              <button class="plan-card__btn plan-card__btn--accent" type="button">Select Plan</button>
          </div>
           <div class="plan-card">
              <h3 class="plan-card__name">Platinum</h3>
              <p class="plan-card__price">$500<span class="plan-card__period">/year</span></p>
              <ul class="plan-card__list">
                   <li>✓ All Gold benefits</li>
                  <li>✓ Airport transfers</li>
                  <li>✓ Dedicated concierge</li>
                  <li>✓ Spa credits</li>
              </ul>
              <button class="plan-card__btn plan-card__btn--outline" type="button">Select Plan</button>
          </div>
       </div>
    </div>
  `,
    styles: [`
    .membership-page {
      max-width: 1320px;
      margin: 0 auto;
      padding: 4rem 1rem;
      text-align: center;
      animation: fadeIn 0.4s ease;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .membership-page__title {
      font-family: 'Playfair Display', serif;
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--color-primary, #1a1a1a);
      margin-bottom: 0.75rem;
    }
    .membership-page__subtitle {
      font-size: 1.25rem;
      color: var(--color-text-secondary, #555);
      margin-bottom: 3rem;
      max-width: 36rem;
      margin-left: auto;
      margin-right: auto;
    }
    .membership-page__cards {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
      max-width: 64rem;
      margin: 0 auto;
      align-items: center;
    }
    @media (min-width: 768px) {
      .membership-page__title { font-size: 3rem; }
      .membership-page__cards { grid-template-columns: repeat(3, 1fr); }
    }
    .plan-card {
      border: 1px solid #e5e7eb;
      padding: 2rem;
      border-radius: 20px;
      background: #fff;
    }
    .plan-card--featured {
      background: #111827;
      color: #fff;
      border-color: var(--color-accent, #c8e648);
      box-shadow: 0 16px 40px rgba(0,0,0,0.15);
    }
    @media (min-width: 768px) {
      .plan-card--featured { transform: translateY(-1rem); }
    }
    .plan-card__name {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    .plan-card__name--accent {
      color: var(--color-accent, #c8e648);
    }
    .plan-card__price {
      font-size: 1.875rem;
      font-weight: 700;
      color: var(--color-primary, #1a1a1a);
      margin-bottom: 1.5rem;
    }
    .plan-card--featured .plan-card__price {
      color: #fff;
    }
    .plan-card__period {
      font-size: 0.875rem;
      font-weight: 400;
      color: #9ca3af;
    }
    .plan-card__list {
      text-align: left;
      list-style: none;
      padding: 0;
      margin: 0 0 2rem 0;
    }
    .plan-card__list li {
      padding: 0.4rem 0;
      color: var(--color-text-secondary, #555);
    }
    .plan-card--featured .plan-card__list li {
      color: #d1d5db;
    }
    .plan-card__btn {
      width: 100%;
      padding: 0.75rem 1.5rem;
      border-radius: 12px;
      font-size: 0.9rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .plan-card__btn--outline {
      background: #fff;
      color: var(--color-primary, #1a1a1a);
      border: 1px solid var(--color-primary, #1a1a1a);
    }
    .plan-card__btn--outline:hover {
      background: #f9fafb;
    }
    .plan-card__btn--accent {
      background: var(--color-accent, #c8e648);
      color: var(--color-primary, #1a1a1a);
      border: none;
      font-weight: 700;
    }
    .plan-card__btn--accent:hover {
      background: #fff;
    }
  `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MembershipComponent { }
