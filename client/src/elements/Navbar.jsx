import { NavLink } from "react-router-dom";
import { pages } from "../utils/pages";
import "../styles/Navbar.css";

export default function Navbar() {
    return (
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
    );
}
