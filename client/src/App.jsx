import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { pages, NotFoundPage } from "./utils/pages";

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                {pages.map((page) => (
                    <Route
                        key={page.path}
                        path={page.path}
                        element={<page.component />}
                    />
                ))}
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}
