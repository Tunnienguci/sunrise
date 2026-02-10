import { Injectable, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface User {
    id: string;
    name: string;
    email: string;
    photoUrl: string;
    provider: 'google' | 'facebook' | 'github';
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly platformId = inject(PLATFORM_ID);
    private readonly _currentUser = signal<User | null>(null);
    readonly currentUser = computed(() => this._currentUser());
    readonly isAuthenticated = computed(() => !!this._currentUser());

    login(provider: 'google' | 'facebook' | 'github') {
        // Mock login delay
        setTimeout(() => {
            const mockUser: User = {
                id: 'u1',
                name: 'Cong Tuan', // Mocking the user name
                email: 'congtuan@example.com',
                photoUrl: 'https://i.pravatar.cc/150?u=congtuan',
                provider
            };
            this._currentUser.set(mockUser);
            if (isPlatformBrowser(this.platformId)) {
                localStorage.setItem('user', JSON.stringify(mockUser));
            }
        }, 800);
    }

    logout() {
        this._currentUser.set(null);
        if (isPlatformBrowser(this.platformId)) {
            localStorage.removeItem('user');
        }
    }

    constructor() {
        if (isPlatformBrowser(this.platformId)) {
            // Check local storage on init only in browser
            try {
                const stored = localStorage.getItem('user');
                if (stored) {
                    this._currentUser.set(JSON.parse(stored));
                }
            } catch (e) {
                console.warn('Failed to parse user from local storage', e);
                // Clear invalid data
                localStorage.removeItem('user');
            }
        }
    }
}
