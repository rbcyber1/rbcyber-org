import { Navigate } from "react-router-dom";
import { isAuthenticated, isAdmin } from "../utils/login";

export default function ProtectedRoute({ children, requiresAdmin = false }) {
    if (!isAuthenticated()) {
        return <Navigate to="/login" replace />;
    }

    if (requiresAdmin && !isAdmin()) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
}
