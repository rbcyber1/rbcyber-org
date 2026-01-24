import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../styles/Home.css";

export default function Home() {
    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Welcome!</h1>
            <div className="card">
                <p>
                    <a href="https://rbcyber.org/">rbcyber.org</a> is currently
                    undergoing maintenance. Check the{" "}
                    <a href="https://github.com/rbcyber1/rbcyber-org-">
                        GitHub repo
                    </a>{" "}
                    for updates.
                </p>
            </div>
            <div className="footer">
                <p>
                    See the routing test page <a href="/about">here</a>.
                </p>
            </div>
        </>
    );
}
