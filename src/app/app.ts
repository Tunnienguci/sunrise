import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'sunrise-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  constructor() {
    this.title.setTitle('Sunrise Hotel - Find Your Dream Vacation');
    this.meta.addTags([
      { name: 'description', content: 'Book amazing hotels, compare prices, and find your dream vacation easily with Sunrise Hotel.' },
      { name: 'keywords', content: 'hotel, booking, vacation, travel, luxury, resort' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]);
  }
}
