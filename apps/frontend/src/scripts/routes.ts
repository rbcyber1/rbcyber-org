import type { NavItem } from "./../types/nav";

const publicRoutes = import.meta.glob("../routes/public/*.tsx", {
    eager: true,
});

export const changeLevel = () => {
    alert("Currently under maintenance. Please check back later.");
};

export const getMainRoutes = (): NavItem[] => {
    const routes = Object.keys(publicRoutes).map((routeFile) => {
        const routeName = routeFile.split("/").pop()?.replace(".tsx", "") ?? "";

        return {
            label: routeName,
            href: routeName === "Home" ? "/" : `/${routeName.toLowerCase()}`,
        };
    });

    return routes;
};
