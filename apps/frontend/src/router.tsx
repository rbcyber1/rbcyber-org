import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./routes/public/Home";
import About from "./routes/public/About";
import Join from "./routes/public/Join";

import RedirectRouter from "./routes/shared/RedirectRoute";
import NotFound from "./routes/shared/NotFound";

export const routeConfig: RouteObject[] = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
                handle: {
                    nav: { label: "Home", href: "/" },
                    backgroundSlide: 0,
                },
            },
            {
                path: "/about",
                element: <About />,
                handle: {
                    nav: { label: "About", href: "/about" },
                    backgroundSlide: 1,
                },
            },
            {
                path: "/join",
                element: <Join />,
                handle: {
                    nav: { label: "Join", href: "/join" },
                    backgroundSlide: 2,
                },
            },
            { path: "*", element: <NotFound /> },
        ],
    },
    {
        path: "/r/*",
        element: <RedirectRouter />,
    },
];

const router = createBrowserRouter(routeConfig);

export default router;
