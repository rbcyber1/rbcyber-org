import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

import { createLoginTable } from "./db/login.js";
import logger from "./middleware/logger.js";
import { authenticateToken, requireAdmin } from "./controllers/auth.js";

import loginRoutes from "./routes/login.js";
import logoutRoutes from "./routes/logout.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, "../client/dist");

dotenv.config({ path: path.join(__dirname, "./config/.env") });

const app = express();
const PORT = process.env.RBCYBER_PORT || 3000;

createLoginTable()
    .then(() => console.log("Database tables initialized"))
    .catch((err) => console.error("Database initialization error:", err));

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", loginRoutes);
app.use("/api", logoutRoutes);

app.use(express.static(distPath));

app.get(/(.*)/, (_, res) => {
    res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () =>
    console.log(`Express server running on http://localhost:${PORT}`),
);
