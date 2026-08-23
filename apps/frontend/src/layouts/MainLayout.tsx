import { Outlet } from "react-router-dom";

import UserHeader from "../components/UserHeader";
import LevelChange from "../components/LevelChange";
import Header from "../components/Header";
import FooterNavbar from "../components/FooterNavbar";

import { getMainRoutes } from "../scripts/routes";

import "../styles/layouts/MainLayout.css";

const MainLayout = () => {
    return (
        <div className="main-layout">
            <header className="header-row">
                <LevelChange level="Dashboard" />
                <Header />
                <UserHeader />
            </header>
            <main className="main-content">
                <Outlet />
            </main>
            <footer className="footer-row">
                <LevelChange level="Learn" />
                <FooterNavbar items={getMainRoutes()} />
            </footer>
        </div>
    );
};

export default MainLayout;
