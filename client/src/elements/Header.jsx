import { NavLink } from "react-router-dom";

import "../styles/Header.css";

export default function Header() {
    return (
        <header>
            <div className="header-content">
                <h1>Rancho Bernardo Cybersecurity Club</h1>
            </div>
            <div className="login">
                <NavLink to="/login" className="header-link">
                    Login
                </NavLink>
            </div>
        </header>
    );
}
