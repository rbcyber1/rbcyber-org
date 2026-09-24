import "../../styles/pages/Home.css";

import ImageCarrousel from "../../components/ImageCarrousel";

const homeCarouselImages = Object.values(
    import.meta.glob("/public/imgs/carrousel/*", {
        eager: true,
        import: "default",
        query: "?url",
    }),
) as string[];

const Home = () => {
    return (
        <div className="home-page">
            <section className="home-page-intro">
                <p className="home-page-eyebrow">RBHSCC // EST. 2026</p>
                <h1>
                    Build the skills
                    <span className="recolor"> behind the signal.</span>
                </h1>
                <p className="home-page-content-description">
                    A student-led cybersecurity club turning curiosity into
                    hands-on experience through projects, certifications, and
                    mentorship.
                </p>
                <div className="home-page-stats" aria-label="Club focus areas">
                    <span>01 / Explore</span>
                    <span>02 / Build</span>
                    <span>03 / Compete</span>
                </div>
            </section>
            <div className="home-page-content">
                <ImageCarrousel images={homeCarouselImages} />
            </div>
        </div>
    );
};

export default Home;
