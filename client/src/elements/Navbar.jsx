import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "nav-links active" : "nav-links"
                        }
                        to="/"
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "nav-links active" : "nav-links"
                        }
                        to="/health"
                    >
                        Health
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
