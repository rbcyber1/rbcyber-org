import "../styles/Pages.css";

export default function Home() {
    return (
        <div className="page-content">
            <div>
                <img
                    src="/logo.png"
                    alt="RB Cyber Logo"
                    style={{ maxWidth: "300px" }}
                />
            </div>
            <div>
                <h1>Welcome!</h1>
                <p>
                    <a href="https://rbcyber.org">rbcyber.org</a> is currently
                    under maintenance. Please visit the{" "}
                    <a href="https://github.com/rbcyber1/rbcyber-org">
                        GitHub repository
                    </a>{" "}
                    for updates.
                </p>
            </div>
        </div>
    );
}
