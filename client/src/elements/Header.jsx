import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Header.css";
import { isAuthenticated, logout } from "../utils/login";

export default function Header() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

    useEffect(() => {
        const handleAuthChange = () => {
            setIsLoggedIn(isAuthenticated());
        };

        window.addEventListener("auth-change", handleAuthChange);

        return () => {
            window.removeEventListener("auth-change", handleAuthChange);
        };
    }, []);

    const handleAuthClick = async (e) => {
        e.preventDefault();

        if (isLoggedIn) {
            await logout();
            window.dispatchEvent(new Event("auth-change"));
            navigate("/login");
        } else {
            navigate("/login");
        }
    };

    return (
        <header>
            <div className="header-content">
                <h1>Rancho Bernardo Cybersecurity Club</h1>
            </div>
            <div className="login">
                <a
                    href="/login"
                    className="header-link"
                    onClick={handleAuthClick}
                >
                    {isLoggedIn ? "Logout" : "Login"}
                </a>
            </div>
        </header>
    );
}
