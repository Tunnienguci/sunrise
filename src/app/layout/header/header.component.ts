import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAV_ITEMS } from '../../core/constants';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { TranslatePipe } from '../../core/pipes/translate.pipe';
import { LanguageService } from '../../core/services/language.service';
import { AuthService } from '../../core/services/auth.service';
import { LanguageCode } from '../../core/i18n/start';

@Component({
  selector: 'sunrise-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, ButtonComponent, NgOptimizedImage, TranslatePipe, UpperCasePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected readonly navItems = NAV_ITEMS;
  protected readonly mobileMenuOpen = signal(false);
  protected readonly languageService = inject(LanguageService);
  protected readonly authService = inject(AuthService);

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  protected setLanguage(code: string): void {
    this.languageService.setLanguage(code as LanguageCode);
  }
}
