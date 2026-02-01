import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ProtectedRoute from "./elements/ProtectedRoute";
import {
    finalPages,
    finalSubpages,
    NotFoundPage,
    LoginPage,
    UnauthorizedPage,
} from "./utils/pages";

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                {finalPages.map((page) => {
                    const PageComponent = page.component;

                    if (page.requiresAuth || page.requiresAdmin) {
                        return (
                            <Route
                                key={page.path}
                                path={page.path}
                                element={
                                    <ProtectedRoute
                                        requiresAdmin={page.requiresAdmin}
                                    >
                                        <PageComponent />
                                    </ProtectedRoute>
                                }
                            />
                        );
                    }

                    return (
                        <Route
                            key={page.path}
                            path={page.path}
                            element={<PageComponent />}
                        />
                    );
                })}
                {finalSubpages.map((subpage) => (
                    <Route
                        key={subpage.path}
                        path={subpage.path}
                        element={<subpage.component />}
                    />
                ))}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/unauthorized" element={<UnauthorizedPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}
