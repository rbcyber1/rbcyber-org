import { useState } from "react";
import SubNavElement from "./SubNavElement";

export default function ParentNavElement({ section }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleSection = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="nav-section">
            <button className="nav-section-header" onClick={toggleSection}>
                <span>{section.name}</span>
                <span className={`arrow ${isExpanded ? "expanded" : ""}`}>
                    ▶
                </span>
            </button>
            {isExpanded && (
                <ul className="nav-submenu">
                    {section.children.map((child) => (
                        <li key={child.path}>
                            <SubNavElement page={child} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
