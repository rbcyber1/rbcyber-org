import { Navigate, useLocation } from "react-router-dom";

const NotFound = () => {
    const { pathname } = useLocation();

    if (pathname !== "/404") {
        return <Navigate to="/404" replace />;
    }

    return (
        <div className="not-found">
            <h1>404 - Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
};

export default NotFound;
