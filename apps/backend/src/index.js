import express from "express";
import helmet from "helmet";
import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config({ path: path.resolve(__dirname, "../config/.env"), quiet: true });

const app = express();
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("rbcyber.org is under maintenance. Please check back later.");
});

app.listen(process.env.RBCYBER_WEB_PORT, () => {
    if (!process.env.RBCYBER_WEB_PORT) {
        console.error(
            "Error: RBCYBER_WEB_PORT environment variable is not set.",
        );
        process.exit(1);
    }

    console.log(
        `rbcyber-web-backend is running on port ${process.env.RBCYBER_WEB_PORT}`,
    );
});
