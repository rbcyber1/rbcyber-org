import { NavLink } from "react-router-dom";
import { pages } from "../utils/pages";
import Corner from "./Corner";
import "../styles/Navbar.css";

export default function Navbar() {
    return (
        <div className="navbar-container">
            <Corner />
            <nav>
                <ul>
                    {pages.map((page) => (
                        <li key={page.path}>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "nav-links active" : "nav-links"
                                }
                                to={page.path}
                            >
                                {page.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
