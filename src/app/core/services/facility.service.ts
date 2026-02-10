import { Injectable, signal, computed } from '@angular/core';
import { FacilityItem, FacilityTab } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class FacilityService {
    private readonly tabs = signal<FacilityTab[]>([
        { id: 'wellness', label: 'Wellness & Spa', active: true },
        { id: 'recreation', label: 'Recreation', active: false },
        { id: 'dining', label: 'Dining', active: false },
    ]);

    private readonly facilities = signal<FacilityItem[]>([
        {
            id: 'f1',
            title: 'Six Senses Spa',
            description: 'A sanctuary for the senses, offering traditional Vietnamese treatments and integrated wellness programs in a serene setting.',
            imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
            location: 'Ninh Van Bay, Vietnam',
            category: 'wellness',
        },
        {
            id: 'f2',
            title: 'Water Sports Center',
            description: 'Explore the bay with complimentary kayaks, paddleboards, and snorkeling gear. Professional diving courses available.',
            imageUrl: 'https://media.sixsenses.com/B60H3R33/at/qng6fb544nfrg7s3pbkhvhnv/krabey-island-cambodia_Snorkeling2.jpg?format=webp&width=790&height=987&fit=crop',
            location: 'Ninh Van Bay, Vietnam',
            category: 'recreation',
        },
        {
            id: 'f3',
            title: 'Dining by the Bay',
            description: 'Main restaurant offering international fusion dishes with a focus on fresh, local seafood and organic produce.',
            imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
            location: 'Ninh Van Bay, Vietnam',
            category: 'dining',
        },
        {
            id: 'f4',
            title: 'Yoga Pavilion',
            description: 'Begin your day with sunrise yoga sessions in our overwater pavilion, surrounded by the calming sounds of the ocean.',
            imageUrl: 'https://www.sixsenses.com/images/Box-text-image-medium-1.jpg',
            location: 'Ninh Van Bay, Vietnam',
            category: 'wellness',
        },
        {
            id: 'f5',
            title: 'Hiking Trails',
            description: 'Guided hikes to the top of Heo Mountain for panoramic views of the bay and the resident Langurs.',
            imageUrl: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=80',
            location: 'Ninh Van Bay, Vietnam',
            category: 'recreation',
        },
        {
            id: 'f6',
            title: 'The Wine Cave',
            description: 'An intimate setting for private dinners and wine tastings, featuring an extensive selection of vintage wines.',
            imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
            location: 'Ninh Van Bay, Vietnam',
            category: 'dining',
        }
    ]);

    readonly allTabs = this.tabs.asReadonly();

    readonly activeTab = computed(
        () => this.tabs().find((tab) => tab.active)?.id ?? 'wellness'
    );

    readonly filteredFacilities = computed(() => {
        const activeTabId = this.activeTab();
        return this.facilities().filter((f) => f.category === activeTabId);
    });

    setActiveTab(tabId: string): void {
        this.tabs.update((tabs) =>
            tabs.map((tab) => ({ ...tab, active: tab.id === tabId }))
        );
    }
}
