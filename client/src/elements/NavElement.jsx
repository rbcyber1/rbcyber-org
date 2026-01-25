import { NavLink } from "react-router-dom";

export default function NavElement({ page }) {
    return (
        <NavLink
            className={({ isActive }) =>
                isActive ? "nav-links active" : "nav-links"
            }
            to={page.path}
        >
            {page.name}
        </NavLink>
    );
}
