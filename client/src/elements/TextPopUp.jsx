import "../styles/TextPopUp.css";

export default function TextPopUp({ isOpen, title, message, isError }) {
    if (!isOpen) return null;

    return (
        <div className={isError ? "popup error" : "popup info"}>
            <div className="popup-title">
                <img src={isError ? "/warning.svg" : "/info.svg"} alt="icon" />
                <h2>{title}</h2>
            </div>
            <div className="popup-message">{message}</div>
        </div>
    );
}
