import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'sunrise-facilities',
    imports: [CommonModule],
    template: `
    <div class="max-w-[1320px] mx-auto px-4 py-16 animate-fade-in">
       <h1 class="font-serif text-4xl md:text-5xl font-bold text-center text-primary mb-12">Facilities</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div class="space-y-4">
                <div class="aspect-video rounded-xl overflow-hidden">
                   <img src="https://media.sixsenses.com/B60H3R33/at/qng6fb544nfrg7s3pbkhvhnv/krabey-island-cambodia_Snorkeling2.jpg?format=webp&width=790&height=987&fit=crop"
                        alt="Infinity Pool overlooking the bay" class="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 class="text-2xl font-bold text-primary">Infinity Pools</h3>
                <p class="text-text-secondary">Swim amidst the clouds in our signature infinity pools with breathtaking views of Ninh Van Bay.</p>
            </div>
             <div class="space-y-4">
                <div class="aspect-video rounded-xl overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80"
                        alt="Six Senses Spa treatment" class="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 class="text-2xl font-bold text-primary">Six Senses Spa</h3>
                <p class="text-text-secondary">A sanctuary for the senses, offering traditional Vietnamese treatments and integrated wellness programs.</p>
            </div>
            <div class="space-y-4">
                <div class="aspect-video rounded-xl overflow-hidden">
                   <img src="https://www.sixsenses.com/images/Box-text-image-medium-1.jpg"
                        alt="Yoga pavilion by the ocean" class="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 class="text-2xl font-bold text-primary">Yoga & Meditation</h3>
                <p class="text-text-secondary">Begin your day with sunrise yoga sessions in our overwater pavilion, surrounded by the calming ocean.</p>
            </div>
            <div class="space-y-4">
                <div class="aspect-video rounded-xl overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                        alt="Fine dining restaurant" class="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 class="text-2xl font-bold text-primary">Dining Experiences</h3>
                <p class="text-text-secondary">International fusion dishes with a focus on fresh, local seafood and organic produce from our garden.</p>
            </div>
        </div>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FacilitiesComponent { }
