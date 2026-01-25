import { useState } from "react";
import Modal from "../elements/Modal";

import "../styles/Login.css";

export default function Login() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="login-container">
            <div className="login-title">
                <h1>Welcome back!</h1>
                <p>Sign in below using your provided credentials.</p>
            </div>
            <div className="login-form">
                <form className="form-container">
                    <input
                        type="text"
                        placeholder="Username"
                        className="login-input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="login-input"
                    />
                    <button className="login-button">Login</button>
                </form>
                <button
                    className="help-button"
                    onClick={() => setIsModalOpen(true)}
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
