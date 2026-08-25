import { Navigate, useLocation } from "react-router-dom";

import type { RedirectLink } from "../../types/nav";

const redirects: RedirectLink[] = [
    { redirectPath: "/card", destination: "/join" },
];

const RedirectRouter = () => {
    const location = useLocation();

    const redirect = redirects.find(
        (redirect) => "/r" + redirect.redirectPath === location.pathname,
    );

    if (!redirect) {
        return <Navigate to="/404" replace />;
    }

    return <Navigate to={redirect.destination} replace />;
};

export default RedirectRouter;
