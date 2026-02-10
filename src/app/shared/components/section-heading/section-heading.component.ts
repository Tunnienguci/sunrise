import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'sunrise-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './section-heading.component.html',
  styleUrl: './section-heading.component.scss'
})
export class SectionHeadingComponent {
  readonly pill = input<string>();
  readonly pillIcon = input<string>();
  readonly label = input<string>();
  readonly subtitle = input<string>();
}
