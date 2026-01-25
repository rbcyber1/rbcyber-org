const pageModules = import.meta.glob("../pages/*.jsx", { eager: true });

const EXCLUDED_PAGES = ["NotFound.jsx", "Login.jsx"];

export const pages = Object.entries(pageModules)
    .filter(([path]) => {
        const fileName = path.split("/").pop();
        return !EXCLUDED_PAGES.includes(fileName);
    })
    .map(([path, module]) => {
        const fileName = path.split("/").pop().replace(".jsx", "");

        // Convert file name to route path
        const routePath =
            fileName === "Home" ? "/" : `/${fileName.toLowerCase()}`;

        // Convert file name to display name (e.g., "AboutUs" -> "About Us")
        const displayName = fileName.replace(/([A-Z])/g, " $1").trim();

        return {
            path: routePath,
            name: displayName,
            component: module.default,
        };
    })
    .sort((a, b) => {
        if (a.path === "/") return -1;
        if (b.path === "/") return 1;
        return a.name.localeCompare(b.name);
    });

// Export NotFound separately for catch-all route
export const NotFoundPage = pageModules["../pages/NotFound.jsx"]?.default;
