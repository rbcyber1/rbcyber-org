import { CircleUserRound } from "lucide-react";

import { getAvatarUrl, doSignIn } from "../scripts/user";

import "../styles/components/UserHeader.css";

const UserHeader = () => {
    const username = ""; // Placeholder for the current user's username

    return (
        <div className="user-header">
            <button className="user-header-content" onClick={doSignIn}>
                {getAvatarUrl(username) ?
                    <img
                        src={getAvatarUrl(username)}
                        alt="User Avatar"
                        className="user-header-avatar"
                    />
                :   <CircleUserRound size={36} strokeWidth={1.5} />}
                <h1 className="user-header-title">{username || "Sign In"}</h1>
            </button>
        </div>
    );
};

export default UserHeader;
