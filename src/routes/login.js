import express from "express";
import { loginUser, verifyToken } from "../controllers/login.js";

const router = express.Router();

router.post("/login", loginUser);

router.get("/verify", verifyToken);

export default router;
