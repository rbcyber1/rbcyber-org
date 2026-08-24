import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { useMatches } from "react-router-dom";

import { WarpFieldBackground } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

import "../styles/backgrounds/MainBackground.css";

const MainBackground = () => {
    const [backgroundKey, setBackgroundKey] = useState(0);
    const matches = useMatches();
    const activeRoute = matches.find((match) => {
        const handle = match.handle as { nav?: unknown } | undefined;
        return Boolean(handle?.nav);
    });
    const backgroundSlide =
        (activeRoute?.handle as { backgroundSlide?: number } | undefined)
            ?.backgroundSlide ?? 0;

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
        <div
            className="main-background"
            style={
                {
                    "--background-slide": backgroundSlide,
                } as CSSProperties
            }
        >
            <div className="main-background-slide">
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
        </div>
    );
};

export default MainBackground;
