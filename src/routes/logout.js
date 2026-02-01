import express from "express";

const router = express.Router();

router.post("/logout", (req, res) => {
    res.json({ success: true, message: "Logged out successfully" });
});

export default router;
