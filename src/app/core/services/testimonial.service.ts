import { Injectable, signal, computed } from '@angular/core';
import { Testimonial } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class TestimonialService {
    private readonly testimonials = signal<Testimonial[]>([
        {
            id: 't1',
            author: 'Juan Materson',
            avatar: 'https://i.pravatar.cc/150?u=juan',
            role: 'Business Traveler',
            content:
                'With our dedication and expertise in hospitality, we strive to provide stays that are not just accommodations, but a comforting journey toward relaxation and memorable experiences.',
            rating: 5,
        },
        {
            id: 't2',
            author: 'Sarah Chen',
            avatar: 'https://i.pravatar.cc/150?u=sarah',
            role: 'Frequent Guest',
            content:
                'Sunrise Hotels has redefined the way I experience travel. Every stay feels like coming home to a place where every detail is thoughtfully curated for comfort.',
            rating: 5,
        },
        {
            id: 't3',
            author: 'Michael Okonkwo',
            avatar: 'https://i.pravatar.cc/150?u=michael',
            role: 'Family Vacationer',
            content:
                'From the warm welcome to the luxurious amenities, Sunrise delivered an unforgettable family vacation. The kids loved the pool and we loved the spa.',
            rating: 4,
        },
    ]);

    private readonly activeIndex = signal(0);

    readonly allTestimonials = this.testimonials.asReadonly();

    readonly activeTestimonial = computed(
        () => this.testimonials()[this.activeIndex()]
    );

    readonly totalCount = computed(() => this.testimonials().length);

    readonly currentIndex = this.activeIndex.asReadonly();

    next(): void {
        this.activeIndex.update((i) =>
            i < this.testimonials().length - 1 ? i + 1 : 0
        );
    }

    previous(): void {
        this.activeIndex.update((i) =>
            i > 0 ? i - 1 : this.testimonials().length - 1
        );
    }
}
