import { getLoggedInUser } from "../utils/login.js";

import "../styles/Corner.css";

export default function Corner() {
    return (
        <div className="corner">
            <img src="/logo.png" alt="RB Cybersecurity Club logo" />
            <p>Welcome, {getLoggedInUser()}</p>
        </div>
    );
}
