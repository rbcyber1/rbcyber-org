import { Outlet } from "react-router-dom";
import Navbar from "./elements/Navbar";
import "./styles/Layout.css";

export default function Layout() {
    return (
        <div className="layout-container">
            <Navbar />
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    );
}
