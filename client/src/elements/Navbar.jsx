import { pages } from "../utils/pages";
import Corner from "./Corner";
import NavElement from "./NavElement";
import ParentNavElement from "./ParentNavElement";
import "../styles/Navbar.css";

export default function Navbar() {
    return (
        <div className="navbar-container">
            <Corner />
            <nav>
                <ul>
                    {pages.map((page) => (
                        <li key={page.children ? page.fileName : page.path}>
                            {page.children && page.children.length > 0 ?
                                <ParentNavElement section={page} />
                            :   <NavElement page={page} />}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
