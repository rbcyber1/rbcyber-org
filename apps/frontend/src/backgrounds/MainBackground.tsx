import { useEffect, useState } from "react";

import { WarpFieldBackground } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

import "../styles/backgrounds/MainBackground.css";

const MainBackground = () => {
    const [backgroundKey, setBackgroundKey] = useState(0);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (!document.hidden) {
                setBackgroundKey((key) => key + 1);
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () =>
            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange,
            );
    }, []);

    return (
        <div className="main-background">
            <WarpFieldBackground
                key={backgroundKey}
                variant="hyperspace"
                speed={3.5}
                streakOpacity={0.77}
                tileOpacity={0.12}
                fov={45}
                hue={-18}
                saturation={0.52}
                brightness={0.59}
            />
        </div>
    );
};

export default MainBackground;
