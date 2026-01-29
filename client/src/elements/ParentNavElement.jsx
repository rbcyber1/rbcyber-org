import { useState } from "react";

export default function ParentNavElement({ page, children }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleSection = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="nav-section">
            <button className="nav-section-header" onClick={toggleSection}>
                <span>{page.name}</span>
                <span className={`arrow ${isExpanded ? "expanded" : ""}`}>
                    ▶
                </span>
            </button>
            {isExpanded && children}
        </div>
    );
}
