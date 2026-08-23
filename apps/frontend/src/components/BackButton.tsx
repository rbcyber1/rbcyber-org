const BackButton = (backUrl: string) => {
    return (
        <div className="back-button">
            <a href={backUrl} className="back-button-link">
                Back
            </a>
        </div>
    );
};

export default BackButton;
