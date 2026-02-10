import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Hotel, HotelSearchParams } from '../interfaces/hotel.interface';

@Injectable({
    providedIn: 'root'
})
export class HotelService {
    private http = inject(HttpClient);
    private readonly dataUrl = 'assets/data/hotels.json';

    // State
    private hotelsSignal = signal<Hotel[]>([]);
    private isLoaded = signal(false);

    // Computed
    readonly hotels = computed(() => this.hotelsSignal());
    readonly featuredHotels = computed(() => this.hotels().filter(h => h.featured));
    readonly filteredHotels = signal<Hotel[]>([]);

    constructor() {
        // Only load hotels on the browser to avoid SSR path/port resolution issues with local assets
        // In a real app, we would use TransferState or an absolute URL from config
        if (typeof window !== 'undefined') {
            this.loadHotels();
        }
    }

    private loadHotels() {
        this.http.get<Hotel[]>(this.dataUrl).pipe(
            tap(data => {
                this.hotelsSignal.set(data);
                this.filteredHotels.set(data);
                this.isLoaded.set(true);
            }),
            catchError(err => {
                console.error('Failed to load hotels', err);
                return of([]);
            })
        ).subscribe();
    }

    updateSearchParams(params: HotelSearchParams) {
        const allHotels = this.hotels();

        const filtered = allHotels.filter(hotel => {
            let matchesLocation = true;
            if (params.location) {
                matchesLocation = hotel.location.toLowerCase().includes(params.location.toLowerCase());
            }

            let matchesType = true;
            if (params.type) {
                matchesType = hotel.type === params.type;
            }

            let matchesPrice = true;
            if (params.priceMax && params.priceMax > 0) {
                matchesPrice = hotel.price >= (params.priceMin || 0) && hotel.price <= params.priceMax;
            }

            return matchesLocation && matchesType && matchesPrice;
        });

        this.filteredHotels.set(filtered);
    }

    getHotelById(id: string): Hotel | undefined {
        return this.hotels().find(h => h.id === id);
    }
}
