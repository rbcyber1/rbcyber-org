import { Outlet } from "react-router-dom";

import Header from "./elements/Header";
import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";

import "./styles/Layout.css";

export default function Layout() {
    return (
        <div className="layout-container">
            <Header />
            <Navbar />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
