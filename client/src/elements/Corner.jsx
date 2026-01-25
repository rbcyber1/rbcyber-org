import "../styles/Corner.css";

let currentUser = "Guest";

export default function Corner() {
    return (
        <div className="corner">
            <img src="/logo.png" alt="RB Cybersecurity Club logo" />
            <p>Welcome, {currentUser}</p>
        </div>
    );
}
