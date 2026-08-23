import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Temp from "./components/Temp";

import NotFound from "./routes/shared/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [{ index: true, element: <Temp /> }],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
