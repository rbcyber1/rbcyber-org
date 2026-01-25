import express from "express";

import path from "path";
import { fileURLToPath } from "url";

import dotenv from "dotenv";

import logger from "./middleware/logger.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, "../client/dist");

dotenv.config({ path: path.join(__dirname, "./config/.env") });

const app = express();
const PORT = process.env.RBCYBER_PORT || 3000; // Configure with dotenv, default to 3000

app.use(logger);
app.use(express.static(distPath));

app.get(/(.*)/, (_, res) => {
    res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () =>
    console.log(`Express is server running on http://localhost:${PORT}`),
);
