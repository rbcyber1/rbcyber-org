import pool from "../db/index.js";

export const getHealth = async (_, res) => {
    try {
        const [rows] = await pool.query("SELECT 1");
        res.json({ status: "ok", db: "connected" });
    } catch (err) {
        console.error("Database connection error:", err);
        res.status(500).json({ status: "error", db: "down" });
    }
};
