import { Outlet } from "react-router-dom";

import UserHeader from "../components/UserHeader";
import LevelChange from "../components/LevelChange";
import Header from "../components/Header";
import FooterNavbar from "../components/FooterNavbar";

import { getMainRoutes } from "../scripts/routes";

const MainLayout = () => {
    return (
        <div className="main-layout">
            <Header />
            <UserHeader />
            <LevelChange level="Dashboard" />
            <main className="main-content">
                <Outlet />
            </main>
            <LevelChange level="Learn" />
            <FooterNavbar items={getMainRoutes()} />
        </div>
    );
};

export default MainLayout;
