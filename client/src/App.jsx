import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { finalPages, NotFoundPage, LoginPage } from "./utils/pages";

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
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}
