import { getAvatarUrl } from "../scripts/user";

import "../styles/components/UserHeader.css";

const UserHeader = () => {
    return (
        <div className="user-header">
            <div className="user-header-content">
                <img
                    className="user-header-avatar"
                    src={getAvatarUrl("")}
                    alt="User Avatar"
                />
                <h1 className="user-header-title">Guest</h1>
            </div>
        </div>
    );
};

export default UserHeader;
