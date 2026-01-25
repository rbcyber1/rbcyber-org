import "../styles/Footer.css";

function getYear() {
    return new Date().getFullYear();
}

export default function Footer() {
    return (
        <footer>
            <p>
                &copy; {getYear()} Rancho Bernardo Cybersecurity Club.
                Non-commercial uses permitted.
            </p>
        </footer>
    );
}
