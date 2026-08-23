const LevelChange = ({ level }: { level: string }) => {
    return (
        <div className="level-change">
            <button id="change-level">{level}</button>
        </div>
    );
};

export default LevelChange;
