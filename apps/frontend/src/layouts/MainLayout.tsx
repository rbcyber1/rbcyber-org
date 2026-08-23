import { Outlet } from "react-router-dom";

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
