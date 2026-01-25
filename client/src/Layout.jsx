import { useLocation } from "react-router-dom";
import { useState } from "react";

import Header from "./elements/Header";
import Navbar from "./elements/Navbar";
import Footer from "./elements/Footer";

import { finalPages, NotFoundPage, LoginPage } from "./utils/pages";

import "./styles/Layout.css";

export default function Layout() {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);

    const needsTransition = location.pathname !== displayLocation.pathname;
    const transitionStage = needsTransition ? "fadeOut" : "fadeIn";

    // Find the component to render based on displayLocation
    const getCurrentComponent = () => {
        // Find the page that matches the current display location
        const currentPage = finalPages.find(
            (page) => page.path === displayLocation.pathname,
        );

        // If found, render the corresponding component
        if (displayLocation.pathname === "/login") {
            return <LoginPage />;
        } else if (currentPage) {
            const Component = currentPage.component;
            return <Component />;
        }

        // If no matching page is found, render the NotFoundPage
        return <NotFoundPage />;
    };

    return (
        <div className="layout-container">
            <Header />
            <Navbar />
            <main className="main-content">
                <div
                    // Apply transition classes based on the current stage
                    className={`page-transition ${transitionStage}`}
                    onAnimationEnd={() => {
                        if (needsTransition && transitionStage === "fadeOut") {
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
