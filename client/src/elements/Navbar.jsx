import { finalPages, finalSubpages } from "../utils/pages";
import Corner from "./Corner";
import NavElement from "./NavElement";
import ParentNavElement from "./ParentNavElement";
import "../styles/Navbar.css";

function createSubpageNav(subpages) {
    return (
        <ul>
            {subpages.map((subpage) => (
                <li key={subpage.path}>
                    <NavElement page={subpage} />
                </li>
            ))}
        </ul>
    );
}

export default function Navbar() {
    return (
        <div className="navbar-container">
            <Corner />
            <nav>
                <ul>
                    {finalPages.map((page) => (
                        <li key={page.path}>
                            <ParentNavElement page={page}>
                                {createSubpageNav(
                                    finalSubpages.filter(
                                        (subpage) =>
                                            subpage.parentPath === page.path,
                                    ),
                                )}
                            </ParentNavElement>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
