import { changeLevel } from "../scripts/routes";
import { ArrowUp, ArrowDown } from "lucide-react";

import "../styles/components/LevelChange.css";

const LevelChange = ({
    direction,
    level,
}: {
    direction: string;
    level: string;
}) => {
    return (
        <div className="level-change">
            <button
                className="level-change-button"
                id="level-change-button"
                onClick={() => changeLevel()}
                aria-label={`Switch to ${level}`}
            >
                <span className="level-change-icon" aria-hidden="true">
                    {direction === "up" ?
                        <ArrowUp size={14} strokeWidth={1.5} />
                    :   <ArrowDown size={14} strokeWidth={1.5} />}
                </span>
                <span className="level-change-text">{level}</span>
            </button>
        </div>
    );
};

export default LevelChange;
