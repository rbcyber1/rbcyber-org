import { useState, type ReactNode } from "react";
import ImageCarrousel from "../../components/ImageCarrousel";

import "../../styles/pages/About.css";

const aboutCarouselImages = Object.values(
    import.meta.glob("/public/imgs/officers/*", {
        eager: true,
        import: "default",
        query: "?url",
    }),
) as string[];

const AboutTabHeader = ({
    tabTitle,
    index,
    isActive,
    onSelect,
}: {
    tabTitle: string;
    index: number;
    isActive: boolean;
    onSelect: () => void;
}) => {
    return (
        <button
            className={`about-tab-header ${isActive ? "active" : ""}`}
            onClick={onSelect}
            role="tab"
            aria-selected={isActive}
            aria-controls={`about-panel-${index}`}
            id={`about-tab-${index}`}
            type="button"
        >
            <span className="about-tab-index">0{index + 1}</span>
            <span>{tabTitle}</span>
        </button>
    );
};

const AboutTab = ({
    tabTitle,
    tabSubtitle,
    tabContent,
    imgSrc,
    index,
}: {
    tabTitle: string;
    tabSubtitle: string;
    tabContent: ReactNode;
    imgSrc?: string;
    index: number;
}) => {
    return (
        <section
            className={`about-tab ${imgSrc ? "has-image" : "text-only"}`}
            id={`about-panel-${index}`}
            role="tabpanel"
            aria-labelledby={`about-tab-${index}`}
            tabIndex={0}
        >
            <div className="about-tab-heading">
                <span className="about-tab-kicker">
                    RBCC / {`0${index + 1}`}
                </span>
                <h2>{tabSubtitle}</h2>
            </div>
            <div className="about-tab-content">{tabContent}</div>
            {imgSrc && <img src={imgSrc} alt={tabTitle} />}
        </section>
    );
};

const About = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs: Array<{
        title: string;
        subtitle: string;
        content: ReactNode;
        imgSrc?: string;
    }> = [
        {
            title: "What We Do",
            subtitle: "What happens at club meetings? What are we doing?",
            content: (
                <>
                    <p>
                        Cybersecurity Club hosts weekly meetings on Tuesday,
                        after school, in Rancho Bernardo High's computer lab
                        (Room 303). We host a project, lab, or interactive
                        demonstration every meeting guided by our own
                        publicly-available learning modules, with an occasional
                        professionally-accredited guest presenter. Our meetings
                        are designed so students immediately apply what they
                        learn in real-world lab scenarios. Throughout the year,
                        RBCC hosts or participates in competitive hackathons or
                        Cybersecurity conventions to apply skills and learn
                        about the everchanging industry.
                    </p>
                    <hr></hr>
                    <p>
                        Our club follows a certification-based curriculum so
                        students immediately see professional results. Students
                        learn how to network an entire office from the ground
                        up, build PCs with industry-grade hardware, and create
                        secure systems with both physical and digital tools.
                        Additionally, students learn troubleshoot iPhones to
                        printers, respond to an incoming attack, and initiate
                        ethical pentesting (aka hacking). Not only do students
                        learn basic programming, they learn CS concepts that can
                        be applied to every software engineering, network
                        engineering, or cybersecurity scenario they could
                        encounter in real employment.
                    </p>
                </>
            ),
            imgSrc: "/public/imgs/about/vscode.jpg",
        },
        {
            title: "Why We Do It",
            subtitle:
                "Why do we exist? What do our club meetings work towards?",
            content: (
                <>
                    <p>
                        Rancho Bernardo Cybersecurity Club provides resources
                        for students interested in digital technology or STEM
                        who do not have the materials to study or experiment on
                        their own. The club provides an outlet for students
                        interested in computers to utilize them in much more
                        powerful ways. Our club provides all necessary hardware
                        and software completely from generous donations and
                        families of the officers. One of the primary goals of
                        our club is providing the projects and resources so
                        students can continue to experiment in their own free
                        time. Our club provides a platform for students to meet
                        like-minded peers to meet and work together to learn and
                        grow in the field of cybersecurity.
                    </p>
                    <hr></hr>
                    <p>
                        Additionally, we can boast our club is one of the few
                        on-campus clubs to offer the opportunity of professional
                        certification via CompTIA, where students can be
                        professionally recognized for dedication to the club.
                        Job seekers are over three times as likely to be
                        considered with a professional certification on their
                        resume. Each meetings builds off the last, and we offer
                        tutoring and study resources for students determined to
                        become certified.{" "}
                        <strong>
                            Rancho Bernardo Cybersecurity Club will front exam
                            costs, provided the funding exists, for students who
                            meet certain criteria.
                        </strong>{" "}
                        Our number one priority is outcomes.
                    </p>
                </>
            ),
            imgSrc: "/public/imgs/about/cert.jpg",
        },
        {
            title: "Who Does It?",
            subtitle: "Who's our target audience? Who are the officers?",
            content: (
                <>
                    <p>Coming soon!</p>
                    <ImageCarrousel images={aboutCarouselImages} />
                </>
            ),
        },
    ];

    return (
        <div className="about-page">
            <div className="about-page-title">
                <p className="about-page-eyebrow">RBHSCC // THE BRIEF</p>
                <h1>
                    About <span className="recolor">RBCC</span>
                </h1>
                <p className="about-page-lede">
                    Learn how Rancho Bernardo Cybersecurity Club grows curiosity
                    into a professional career opportunity.
                </p>
            </div>
            <div className="about-page-content">
                <div
                    className="about-tab-list"
                    role="tablist"
                    aria-label="About the club"
                >
                    {tabs.map((tab, index) => (
                        <AboutTabHeader
                            key={tab.title}
                            tabTitle={tab.title}
                            index={index}
                            isActive={activeTab === index}
                            onSelect={() => setActiveTab(index)}
                        />
                    ))}
                </div>
                <AboutTab
                    key={activeTab}
                    index={activeTab}
                    tabTitle={tabs[activeTab].title}
                    tabSubtitle={tabs[activeTab].subtitle}
                    tabContent={tabs[activeTab].content}
                    imgSrc={tabs[activeTab].imgSrc}
                />
            </div>
        </div>
    );
};

export default About;
