import { Pipe, PipeTransform, inject } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Pipe({
    name: 'translate',

    pure: false // Impure to react to signal changes in service
})
export class TranslatePipe implements PipeTransform {
    private readonly languageService = inject(LanguageService);

    transform(key: string): string {
        return this.languageService.translate(key);
    }
}
