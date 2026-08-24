import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./routes/public/Home";

import NotFound from "./routes/shared/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);

export default router;
