import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./features/home/home.routes').then(m => m.HOME_ROUTES)
    },
    {
        path: 'about',
        loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'services',
        loadComponent: () => import('./features/services/services.component').then(m => m.ServicesComponent)
    },
    {
        path: 'facilities',
        loadComponent: () => import('./features/facilities/facilities.component').then(m => m.FacilitiesComponent)
    },
    {
        path: 'membership',
        loadComponent: () => import('./features/membership/membership.component').then(m => m.MembershipComponent)
    },
    {
        path: 'hotels/:id',
        loadComponent: () => import('./features/hotel-detail/hotel-detail.component').then(m => m.HotelDetailComponent),
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            {
                path: 'overview',
                loadComponent: () => import('./features/hotel-detail/components/overview/hotel-overview.component').then(m => m.HotelOverviewComponent)
            },
            {
                path: 'rooms',
                loadComponent: () => import('./features/hotel-detail/components/rooms/hotel-rooms.component').then(m => m.HotelRoomsComponent)
            },
            {
                path: 'reviews',
                loadComponent: () => import('./features/hotel-detail/components/reviews/hotel-reviews.component').then(m => m.HotelReviewsComponent)
            }
        ]
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
