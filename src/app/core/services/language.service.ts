import { Injectable, signal, computed } from '@angular/core';
import { LANGUAGES, LanguageCode, TRANSLATIONS } from '../i18n/start';

@Injectable({ providedIn: 'root' })
export class LanguageService {
    readonly currentLang = signal<LanguageCode>('vi');
    readonly translations = computed(() => TRANSLATIONS[this.currentLang()]);
    readonly languages = LANGUAGES;

    setLanguage(code: LanguageCode): void {
        this.currentLang.set(code);
    }

    // Helper to get nested properties safely
    translate(key: string): string {
        const keys = key.split('.');
        let result: any = this.translations();
        for (const k of keys) {
            if (result && result[k]) {
                result = result[k];
            } else {
                return key;
            }
        }
        return result as string;
    }
}
