import { Component, ChangeDetectionStrategy } from '@angular/core';

import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { TranslatePipe } from '../../../../core/pipes/translate.pipe';

@Component({
  selector: 'sunrise-about-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, TranslatePipe],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent { }
