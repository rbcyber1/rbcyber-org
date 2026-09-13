import "../styles/components/ImageCarrousel.css";

import { useState } from "react";

const images = Object.values(
    import.meta.glob("../../public/imgs/carrousel/*", {
        eager: true,
        import: "default",
        query: "?url",
    }),
);

const ImageCarrousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState<"left" | "right">("right");

    const switchImage = (direction: "left" | "right") => {
        setDirection(direction);
        setActiveIndex((currentIndex) => {
            const offset = direction === "left" ? -1 : 1;
            return (currentIndex + offset + images.length) % images.length;
        });
    };

    return (
        <div className="image-carrousel" aria-label="Club highlights">
            <div className="image-carrousel-label">
                IMAGE / 0{activeIndex + 1}
            </div>
            <button
                className="image-carrousel-button left"
                onClick={() => switchImage("left")}
                aria-label="Show previous image"
            >
                &lt;
            </button>
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Club highlight ${index + 1}`}
                    className={`image-carrousel-image ${index === activeIndex ? "active" : ""} image-carrousel-image-${direction}`}
                />
            ))}
            <button
                className="image-carrousel-button right"
                onClick={() => switchImage("right")}
                aria-label="Show next image"
            >
                &gt;
            </button>
            <div className="image-carrousel-dots" aria-hidden="true">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={index === activeIndex ? "active" : ""}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarrousel;
