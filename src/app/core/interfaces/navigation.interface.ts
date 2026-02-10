export interface NavItem {
    label: string;
    route: string;
    fragment?: string;
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
    ariaLabel: string;
}
