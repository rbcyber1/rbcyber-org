import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./elements/Header";
import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";

import { pages, NotFoundPage } from "./utils/pages";

import "./styles/Layout.css";

export default function Layout() {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState("fadeIn");

    useEffect(() => {
        if (location.pathname !== displayLocation.pathname) {
            setTransitionStage("fadeOut");
        }
    }, [location, displayLocation]);

    // Find the component to render based on displayLocation
    const getCurrentComponent = () => {
        const currentPage = pages.find(
            (page) => page.path === displayLocation.pathname,
        );

        if (currentPage) {
            const Component = currentPage.component;
            return <Component />;
        }

        return <NotFoundPage />;
    };

    return (
        <div className="layout-container">
            <Header />
            <Navbar />
            <main className="main-content">
                <div
                    className={`page-transition ${transitionStage}`}
                    onAnimationEnd={() => {
                        if (transitionStage === "fadeOut") {
                            setTransitionStage("fadeIn");
                            setDisplayLocation(location);
                        }
                    }}
                >
                    {getCurrentComponent()}
                </div>
            </main>
            <Footer />
        </div>
    );
}
