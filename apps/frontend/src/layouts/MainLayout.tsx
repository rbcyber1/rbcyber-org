import { Outlet } from "react-router-dom";

import MainBackground from "../backgrounds/MainBackground";

import UserHeader from "../components/UserHeader";
import LevelChange from "../components/LevelChange";
import Header from "../components/Header";
import FooterNavbar from "../components/FooterNavbar";
import Socials from "../components/Socials";

import { getMainRoutes } from "../scripts/routes";

import "../styles/layouts/MainLayout.css";

const MainLayout = () => {
    return (
        <div className="main-layout">
            <MainBackground />
            <header className="header-row">
                <LevelChange direction="up" level="Dashboard" />
                <Header />
                <UserHeader />
            </header>
            <main className="main-content">
                <Outlet />
            </main>
            <footer className="footer-row">
                <LevelChange direction="down" level="Learn" />
                <FooterNavbar items={getMainRoutes()} />
                <Socials />
            </footer>
        </div>
    );
};

export default MainLayout;
