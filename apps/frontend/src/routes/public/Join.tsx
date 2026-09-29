import "../../styles/pages/Join.css";

const Join = () => {
    return (
        <div className="join-page">
            <div className="page-title">
                <h1>
                    Join RB <span className="recolor">Cybersecurity</span>
                </h1>
            </div>
            <div className="google-form">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe-NOhQCaq7GnnskIcEVXTGlAek4_1mCfRR18MyEWtfLxGGxA/viewform?embedded=true">
                    Loading…
                </iframe>
            </div>
        </div>
    );
};

export default Join;
