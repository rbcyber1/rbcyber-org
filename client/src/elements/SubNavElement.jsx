import { NavLink } from "react-router-dom";

export default function SubNavElement({ page }) {
    return (
        <NavLink
            className={({ isActive }) =>
                isActive ?
                    "nav-links nav-sublink active"
                :   "nav-links nav-sublink"
            }
            to={page.path}
        >
            {page.name}
        </NavLink>
    );
}
