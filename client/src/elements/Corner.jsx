import { useState, useEffect } from "react";
import { getLoggedInUser } from "../utils/login.js";

import "../styles/Corner.css";

export default function Corner() {
    const [username, setUsername] = useState(getLoggedInUser());

    useEffect(() => {
        const handleAuthChange = () => {
            setUsername(getLoggedInUser());
        };

        // Listen for auth changes
        window.addEventListener("auth-change", handleAuthChange);

        return () => {
            window.removeEventListener("auth-change", handleAuthChange);
        };
    }, []);

    return (
        <div className="corner">
            <img src="/logo.png" alt="RB Cybersecurity Club logo" />
            <p>Welcome, {username}</p>
        </div>
    );
}
