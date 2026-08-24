import type { NavItem } from "../types/nav";

import { NavLink } from "react-router-dom";

import "../styles/components/FooterNavbar.css";

const FooterNavbar = ({ items }: { items: NavItem[] }) => {
    return (
        <nav className="footer-navbar" aria-label="Main navigation">
            {items.map((item) => (
                <NavLink
                    key={item.href}
                    to={item.href}
                    end={item.href === "/"}
                >
                    {item.icon && (
                        <span className="footer-navbar-icon">{item.icon}</span>
                    )}
                    <span className="footer-navbar-label">{item.label}</span>
                </NavLink>
            ))}
        </nav>
    );
};

export default FooterNavbar;
