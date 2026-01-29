import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import {
    finalPages,
    finalSubpages,
    NotFoundPage,
    LoginPage,
} from "./utils/pages";

// ...existing code...

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                {finalPages.map((page) => (
                    <Route
                        key={page.path}
                        path={page.path}
                        element={<page.component />}
                    />
                ))}
                {finalSubpages.map((subpage) => (
                    <Route
                        key={subpage.path}
                        path={subpage.path}
                        element={<subpage.component />}
                    />
                ))}
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}
