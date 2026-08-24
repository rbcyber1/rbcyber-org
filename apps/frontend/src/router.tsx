import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./routes/public/Home";
import About from "./routes/public/About";
import Join from "./routes/public/Join";

import NotFound from "./routes/shared/NotFound";

export const routeConfig: RouteObject[] = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
                handle: { nav: { label: "Home", href: "/" } },
            },
            {
                path: "/about",
                element: <About />,
                handle: { nav: { label: "About", href: "/about" } },
            },
            {
                path: "/join",
                element: <Join />,
                handle: { nav: { label: "Join", href: "/join" } },
            },
            { path: "*", element: <NotFound /> },
        ],
    },
];

const router = createBrowserRouter(routeConfig);

export default router;
