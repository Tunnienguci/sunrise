import { SelectItem } from '../../shared/components/select/select.component';

export const HERO_LOCATIONS: SelectItem[] = [
    { label: 'locations.ninhvan', value: 'Ninh Van Bay' },
    { label: 'locations.dalat', value: 'Dalat' },
    { label: 'locations.phuquoc', value: 'Phu Quoc' },
    { label: 'locations.condao', value: 'Con Dao' },
    { label: 'locations.hanoi', value: 'Hanoi' },
    { label: 'locations.hcm', value: 'Ho Chi Minh City' }
];

export const HERO_TYPES: SelectItem[] = [
    { label: 'types.resort', value: 'resort' },
    { label: 'types.luxury', value: 'luxury' },
    { label: 'types.boutique', value: 'boutique' },
    { label: 'types.villa', value: 'villa' }
];

export const HERO_PRICES: SelectItem[] = [
    { label: '$100 - $300', value: '100-300' },
    { label: '$300 - $600', value: '300-600' },
    { label: '$600 - $1,000', value: '600-1000' },
    { label: '+ $1,000', value: '1000-5000' }
];
