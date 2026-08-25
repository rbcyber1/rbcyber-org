export type RedirectLink = {
    redirectPath: string; // This has an implied /r/ in front. Ex, rbcyber.org/r/card will have a redirectPath of /card.
    destination: string; // This does NOT have an implied /r/ in front. It can be a full URL or a relative path.
};

export type NavItem = {
    label: string;
    href: string;
    icon?: React.ReactNode;
};
