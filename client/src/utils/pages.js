// Import all JSX page components from the pages directory
const pages = import.meta.glob("../pages/*.jsx", { eager: true });

const allSubpageModules = import.meta.glob("../pages/*/*.jsx", { eager: true });

const EXCLUDED_PAGES = ["NotFound.jsx", "Unauthorized.jsx", "Login.jsx"];

export const finalPages = Object.entries(pages)
    .filter(([path]) => {
        // Filter out excluded pages
        const fileName = path.split("/").pop();
        return !EXCLUDED_PAGES.includes(fileName);
    })
    .map(([path, module]) => {
        const fileName = path.split("/").pop().replace(".jsx", "");

        const kebabCase = fileName
            .replace(/([a-z])([A-Z])/g, "$1-$2")
            .toLowerCase();
        const finalRoute = fileName === "Home" ? "/" : `/${kebabCase}`;

        const displayName = fileName.replace(/([A-Z])/g, " $1").trim();

        const hasSubpages = Object.keys(allSubpageModules).some(
            (subpagePath) => {
                const folderName = subpagePath.split("/").slice(-2)[0];
                return folderName.toLowerCase() === fileName.toLowerCase();
            },
        );

        return {
            path: finalRoute,
            name: displayName,
            devName: fileName,
            hasSubpages: hasSubpages,
            component: module.default, // Use the default export as the component
        };
    })
    .sort((a, b) => {
        if (a.path === "/") return -1;
        if (b.path === "/") return 1;
        return a.name.localeCompare(b.name);
    });

export const finalSubpages = Object.entries(allSubpageModules)
    .map(([path, module]) => {
        // Extract folder name and file name
        const pathParts = path.split("/");
        const fileName = pathParts.pop().replace(".jsx", "");
        const folderName = pathParts.pop();

        // Find the parent page
        const parentPage = finalPages.find(
            (page) => page.devName.toLowerCase() === folderName,
        );

        if (!parentPage) return null;

        const kebabCase = fileName
            .replace(/([a-z])([A-Z])/g, "$1-$2")
            .toLowerCase();

        const subpagePath = `${parentPage.path === "/" ? "" : parentPage.path}/${kebabCase}`;

        const displayName = fileName.replace(/([A-Z])/g, " $1").trim();

        return {
            path: subpagePath,
            name: displayName,
            component: module.default,
            parentPath: parentPage.path, // Add parent path for easy filtering
        };
    })
    .filter(Boolean);

// Export excluded pages separately
export const NotFoundPage = pages["../pages/NotFound.jsx"]?.default;
export const UnauthorizedPage = pages["../pages/Unauthorized.jsx"]?.default;
export const LoginPage = pages["../pages/Login.jsx"]?.default;
