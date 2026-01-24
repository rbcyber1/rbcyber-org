// client/src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";

import Home from "./pages/Home";
import Health from "./pages/Health";
import NotFound from "./pages/NotFound";

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/health" element={<Health />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}
