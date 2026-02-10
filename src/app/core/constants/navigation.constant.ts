import { NavItem, SocialLink } from '../interfaces';

export const NAV_ITEMS: NavItem[] = [
    { label: 'nav.home', route: '/' },
    { label: 'nav.about', route: '/about' },
    { label: 'nav.services', route: '/services' },
    { label: 'nav.facilities', route: '/facilities' },
    { label: 'nav.membership', route: '/membership' },
];

export const SOCIAL_LINKS: SocialLink[] = [
    {
        platform: 'facebook',
        url: 'https://facebook.com',
        icon: 'facebook',
        ariaLabel: 'Visit our Facebook page',
    },
    {
        platform: 'instagram',
        url: 'https://instagram.com',
        icon: 'instagram',
        ariaLabel: 'Visit our Instagram page',
    },
    {
        platform: 'twitter',
        url: 'https://twitter.com',
        icon: 'twitter',
        ariaLabel: 'Visit our Twitter page',
    },
];

export const FOOTER_LINKS = {
    company: [
        { label: 'About Us', route: '/about' },
        { label: 'Careers', route: '/careers' },
        { label: 'Blog', route: '/blog' },
    ],
    support: [
        { label: 'FAQ', route: '/faq' },
        { label: 'Contact', route: '/contact' },
        { label: 'Privacy Policy', route: '/privacy' },
    ],
    services: [
        { label: 'Hotel Booking', route: '/booking' },
        { label: 'Facilities', route: '/facilities' },
        { label: 'Membership', route: '/membership' },
    ],
};
