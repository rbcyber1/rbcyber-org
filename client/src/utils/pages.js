// Import all JSX page components from the pages directory
const pages = import.meta.glob("../pages/*.jsx", { eager: true });

// Import all subpages from page folders (must be static)
const allSubpageModules = import.meta.glob("../pages/*/*.jsx", { eager: true });

const EXCLUDED_PAGES = ["NotFound.jsx", "Unauthorized.jsx", "Login.jsx"];

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
        // Convert camelCase/PascalCase to kebab-case for URLs
        const kebabCase = fileName
            .replace(/([a-z])([A-Z])/g, "$1-$2")
            .toLowerCase();
        const finalRoute = fileName === "Home" ? "/" : `/${kebabCase}`;

        // Format display name by adding spaces before capital letters
        const displayName = fileName.replace(/([A-Z])/g, " $1").trim();

        // Check if this page has subpages by looking in allSubpageModules
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
        // Sort pages alphabetically, placing home page first
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

        // Convert camelCase/PascalCase to kebab-case for URLs
        const kebabCase = fileName
            .replace(/([a-z])([A-Z])/g, "$1-$2")
            .toLowerCase();

        // Create the full route path
        const subpagePath = `${parentPage.path === "/" ? "" : parentPage.path}/${kebabCase}`;

        // Format display name
        const displayName = fileName.replace(/([A-Z])/g, " $1").trim();

        return {
            path: subpagePath,
            name: displayName,
            component: module.default,
            parentPath: parentPage.path, // Add parent path for easy filtering
        };
    })
    .filter(Boolean);

// Export NotFound page separately for use in routing
export const NotFoundPage = pages["../pages/NotFound.jsx"]?.default;
export const LoginPage = pages["../pages/Login.jsx"]?.default;
