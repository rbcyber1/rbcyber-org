import "../styles/components/Header.css";

const Header = () => {
    return (
        <div className="title-header">
            <img
                className="title-header-logo"
                src="/imgs/logo.png"
                alt="Club Logo"
            />
            <h1 className="title-header-text">
                Rancho Bernardo{" "}
                <span className="recolor">Cybersecurity Club</span>
            </h1>
        </div>
    );
};

export default Header;
