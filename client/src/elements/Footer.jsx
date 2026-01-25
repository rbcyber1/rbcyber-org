import "../styles/Footer.css";

function getYear() {
    return new Date().getFullYear();
}

export default function Footer() {
    return (
        <footer>
            <div className="copyright">
                <p>
                    &copy; {getYear()} Rancho Bernardo Cybersecurity Club.
                    Non-commercial uses permitted.
                </p>
            </div>
            <div className="socials">
                <a
                    href="https://www.instagram.com/rbhscyber"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="social-icon"
                        src="/instagram.svg"
                        alt="Instagram"
                    />
                </a>
                <a
                    href="https://github.com/rbcyber1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="social-icon"
                        src="/github.svg"
                        alt="GitHub"
                    />
                </a>
            </div>
        </footer>
    );
}
