import { Outlet } from "react-router-dom";

import "../components/UserHeader";
import "../components/LevelChange";
import "../components/Header";
import "../components/FooterNavbar";

const MainLayout = () => {
    return (
        <div className="main-layout">
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
