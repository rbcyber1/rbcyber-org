import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function ParentNavElement({ page, children }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleSection = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="nav-section">
            <div className="nav-section-header">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "nav-links active" : "nav-links"
                    }
                    to={page.path}
                >
                    {page.name}
                </NavLink>
                <button
                    className="expand-toggle"
                    onClick={toggleSection}
                    aria-label={isExpanded ? "Collapse" : "Expand"}
                >
                    <span className={`arrow ${isExpanded ? "expanded" : ""}`}>
                        ▶
                    </span>
                </button>
            </div>
            <div className={`nav-subpages ${isExpanded ? "open" : ""}`}>
                {children}
            </div>
        </div>
    );
}
