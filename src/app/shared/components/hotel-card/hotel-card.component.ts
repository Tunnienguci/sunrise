import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sunrise-hotel-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hotel-card.component.html',
  styleUrl: './hotel-card.component.scss',
  imports: [NgOptimizedImage, RouterLink]
})
export class HotelCardComponent {
  readonly id = input.required<string>();
  readonly name = input.required<string>();
  readonly imageUrl = input.required<string>();
  readonly location = input<string>();
  readonly price = input<number>();
  readonly rating = input<number>();

  get formattedPrice(): string {
    const p = this.price();
    return p ? `$${p.toLocaleString('en-US')}/day` : '';
  }
}
