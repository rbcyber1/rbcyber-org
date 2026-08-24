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
                <span className="recolor">Rancho Bernardo</span> Cybersecurity
                Club
            </h1>
        </div>
    );
};

export default Header;
