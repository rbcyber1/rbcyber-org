import "../styles/components/Socials.css";

const Socials = () => {
    return (
        <div className="socials">
            <a
                href="https://github.com/rbcyber1"
                rel="noopener noreferrer"
                aria-label="GitHub"
            >
                <img src="/imgs/github.svg" alt="GitHub" />
            </a>
            <a
                href="https://www.instagram.com/rbhscyber/"
                rel="noopener noreferrer"
                aria-label="Instagram"
            >
                <img src="/imgs/instagram.svg" alt="Instagram" />
            </a>
            <a
                href="https://discord.gg/SqctanM3b7"
                rel="noopener noreferrer"
                aria-label="Discord"
            >
                <img src="/imgs/discord.svg" alt="Discord" />
            </a>
        </div>
    );
};

export default Socials;
