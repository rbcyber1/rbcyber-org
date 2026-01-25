import Modal from "../elements/Modal";

import "../styles/Login.css";

export default function Login() {
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
                <button className="help-button">Need Help?</button>
                <Modal isOpen={false} onClose={() => {}}>
                    <div className="modal-message">
                        <h2>Login Failed</h2>
                        <p>Invalid username or password. Please try again.</p>
                        <button onClick={() => {}}>Close</button>
                    </div>
                </Modal>
            </div>
        </div>
    );
}
