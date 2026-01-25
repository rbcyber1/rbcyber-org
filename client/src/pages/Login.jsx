import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextPopUp from "../elements/TextPopUp";
import Modal from "../elements/Modal";
import { login } from "../utils/login";

import "../styles/Login.css";

export default function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [showPopup, setShowPopup] = useState(false);
    const [popupConfig, setPopupConfig] = useState({
        title: "",
        message: "",
        isError: false,
    });

    const showMessage = (title, message, isError) => {
        setPopupConfig({ title, message, isError });
        setShowPopup(true);

        setTimeout(() => {
            setShowPopup(false);
        }, 2000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username.trim() || !password.trim()) {
            showMessage(
                "Validation Error",
                "Please enter both username and password.",
                true,
            );
            return;
        }

        setIsLoading(true);

        const result = await login(username, password);

        setIsLoading(false);

        if (result.success) {
            showMessage(
                "Login Successful",
                `Welcome back, ${result.user.username}!`,
                false,
            );

            window.dispatchEvent(new Event("auth-change"));

            setTimeout(() => {
                navigate("/");
            }, 1000);
        } else {
            showMessage(
                "Login Failed",
                result.error || "Invalid username or password.",
                true,
            );
            setPassword("");
        }
    };

    return (
        <div className="login-container">
            <TextPopUp
                isOpen={showPopup}
                title={popupConfig.title}
                message={popupConfig.message}
                isError={popupConfig.isError}
            />
            <div className="login-title">
                <h1>Welcome back!</h1>
                <p>Sign in below using your provided credentials.</p>
            </div>
            <div className="login-form">
                <form className="form-container" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        className="login-input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        disabled={isLoading}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="login-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        className="login-button"
                        disabled={isLoading}
                    >
                        {isLoading ? "Logging in..." : "Login"}
                    </button>
                </form>
                <button
                    className="help-button"
                    onClick={() => setIsModalOpen(true)}
                    disabled={isLoading}
                >
                    Need Help?
                </button>
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                >
                    <div className="modal-message">
                        <h2>Need Help?</h2>
                        <p>
                            Credentials can be reset by emailing{" "}
                            <a href="mailto:president@rbcyber.org">
                                president@rbcyber.org
                            </a>
                            . We cannot retrieve old passwords. Do not
                            distribute your login information to anyone.
                        </p>
                        <button onClick={() => setIsModalOpen(false)}>
                            Close
                        </button>
                    </div>
                </Modal>
            </div>
        </div>
    );
}
