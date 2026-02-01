import { Outlet, useLocation } from "react-router-dom";

import Header from "./elements/Header";
import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";

import "./styles/Layout.css";

export default function Layout() {
    const location = useLocation();

    return (
        <div className="layout-container">
            <Header />
            <Navbar />
            <main className="main-content">
                <div key={location.pathname} className="page-transition fadeIn">
                    <Outlet key={location.pathname} />
                </div>
            </main>
            <Footer />
        </div>
    );
}
