import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res
            .status(401)
            .json({ error: "Access denied. No token provided." });
    }

    const token = authHeader.substring(7);

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // Attach user info to request
        next();
    } catch (error) {
        res.status(401).json({ error: "Invalid or expired token" });
    }
};

export const requireAdmin = (req, res, next) => {
    if (!req.user || !req.user.isAdmin) {
        return res
            .status(403)
            .json({ error: "Access denied. Admin privileges required." });
    }
    next();
};
