import express from "express";

const router = express.Router();

// POST /api/logout - Logout endpoint (client-side will clear token)
router.post("/logout", (req, res) => {
    res.json({ success: true, message: "Logged out successfully" });
});

export default router;
