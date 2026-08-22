import { createBrowserRouter } from "react-router-dom";

import Temp from "./components/Temp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Temp />,
    },
]);

export default router;
