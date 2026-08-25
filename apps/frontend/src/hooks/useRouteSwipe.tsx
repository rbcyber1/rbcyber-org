import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { getMainRoutes } from "../scripts/routes";

const useRouteSwipe = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleKeypress = (event: KeyboardEvent) => {
            const mainRoutes = getMainRoutes();
            const currentIndex = mainRoutes.findIndex(
                (route) => route.href === location.pathname,
            );

            if (
                location.pathname === "/404" &&
                (event.key === "ArrowLeft" || event.key === "ArrowRight")
            ) {
                navigate("/");
            } else if (event.key === "ArrowLeft" && currentIndex > 0) {
                navigate(mainRoutes[currentIndex - 1].href);
            } else if (
                event.key === "ArrowRight" &&
                currentIndex < mainRoutes.length - 1
            ) {
                navigate(mainRoutes[currentIndex + 1].href);
            }
        };

        window.addEventListener("keydown", handleKeypress);

        return () => {
            window.removeEventListener("keydown", handleKeypress);
        };
    }, [location, navigate]);
};

export default useRouteSwipe;
