import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';

@Component({
  selector: 'sunrise-carousel-controls',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './carousel-controls.component.html',
  styleUrl: './carousel-controls.component.scss'
})
export class CarouselControlsComponent {
  readonly itemLabel = input('item');
  readonly previous = output<void>();
  readonly next = output<void>();
}
