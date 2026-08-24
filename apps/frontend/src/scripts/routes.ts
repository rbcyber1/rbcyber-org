import type { NavItem } from "../types/nav";
import { routeConfig } from "../router";

export const changeLevel = () => {
    alert("Currently under maintenance. Please check back later.");
};

export const getMainRoutes = (): NavItem[] => {
    const children = routeConfig[0]?.children ?? [];

    return children.flatMap((route) => {
        const navigation = route.handle?.nav;

        return navigation ? [navigation as NavItem] : [];
    });
};
