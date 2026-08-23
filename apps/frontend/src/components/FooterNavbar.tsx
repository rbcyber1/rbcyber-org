import { useLocation } from "react-router-dom";

import type { NavItem } from "../types/nav";

const FooterNavbar = ({ items }: { items: NavItem[] }) => {
    const location = useLocation();

    return (
        <div className="footer-navbar">
            {items.map((item) => (
                <a
                    key={item.href}
                    href={item.href}
                    className={
                        location.pathname === item.href ? "nav-active" : ""
                    }
                >
                    {item.icon && (
                        <span className="footer-navbar-icon">{item.icon}</span>
                    )}
                    <span className="footer-navbar-label">{item.label}</span>
                </a>
            ))}
        </div>
    );
};

export default FooterNavbar;
