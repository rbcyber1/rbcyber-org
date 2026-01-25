// Import all JSX page components from the pages directory
const pages = import.meta.glob("../pages/*.jsx", { eager: true });

const EXCLUDED_PAGES = ["NotFound.jsx", "Login.jsx"];

export const finalPages = Object.entries(pages)
    .filter(([path]) => {
        // Filter out excluded pages
        const fileName = path.split("/").pop();
        return !EXCLUDED_PAGES.includes(fileName);
    })
    .map(([path, module]) => {
        // Remove file extension to get the base name
        const fileName = path.split("/").pop().replace(".jsx", "");

        // Assign home page to root path
        const finalRoute =
            fileName === "Home" ? "/" : `/${fileName.toLowerCase()}`;

        // Format display name by adding spaces before capital letters
        const displayName = fileName.replace(/([A-Z])/g, " $1").trim();

        return {
            path: finalRoute,
            name: displayName,
            component: module.default, // Use the default export as the component
        };
    })
    .sort((a, b) => {
        // Sort pages alphabetically, placing home page first
        if (a.path === "/") return -1;
        if (b.path === "/") return 1;
        return a.name.localeCompare(b.name);
    });

// Export NotFound page separately for use in routing
export const NotFoundPage = pages["../pages/NotFound.jsx"]?.default;
export const LoginPage = pages["../pages/Login.jsx"]?.default;
