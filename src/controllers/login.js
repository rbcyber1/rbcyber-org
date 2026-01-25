import jwt from "jsonwebtoken";
import { findUserInfo } from "../db/login.js";
import { comparePassToSaltedHash } from "../util/password.js";

const JWT_SECRET = process.env.JWT_SECRET || "secret"; // Do not use in production.
const JWT_EXPIRATION = "1h";

export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validate input
        if (!username || !password) {
            return res
                .status(400)
                .json({ error: "Username and password are required" });
        }

        // Get user from database
        const user = await findUserInfo(username);

        if (!user) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        // Compare password with stored hash
        const isValid = await comparePassToSaltedHash(
            password,
            user.password_salt,
            user.password_hash,
        );

        if (!isValid) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user.id, username: user.username, isAdmin: user.is_admin },
            JWT_SECRET,
            { expiresIn: JWT_EXPIRATION },
        );

        // Send response with token
        res.json({
            success: true,
            token,
            user: {
                username: user.username,
                isAdmin: user.is_admin,
            },
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const verifyToken = async (req, res) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ error: "No token provided" });
        }

        const token = authHeader.substring(7);
        const decoded = jwt.verify(token, JWT_SECRET);

        res.json({
            success: true,
            user: {
                username: decoded.username,
                isAdmin: decoded.isAdmin,
            },
        });
    } catch (error) {
        res.status(401).json({ error: "Invalid or expired token" });
    }
};
