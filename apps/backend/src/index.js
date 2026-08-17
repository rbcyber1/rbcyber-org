import express from "express";
import helmet from "helmet";
import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendRoot = path.resolve(__dirname, "../../frontend");

config({ path: path.resolve(__dirname, "../config/.env"), quiet: true });

const app = express();
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json());

if (process.env.NODE_ENV !== "production") {
    console.log("Running in development mode. Using Vite as the dev server.");
    // Dev: Express acts as the dev server.
    // Vite transforms client side code and serves it to the backend on the fly.
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
        root: frontendRoot,
        server: { middlewareMode: true },
        appType: "spa",
    });
    app.use(vite.middlewares);
} else {
    console.log(
        "Running in production mode. Using static files from the frontend build.",
    );
    // Prod: This case is an option for users not running our infrastructure.
    // Serve to this backend itself instead of a reverse proxy.
    app.use(express.static(path.join(frontendRoot, "dist")));
    app.use((req, res) => {
        res.sendFile(path.join(frontendRoot, "dist", "index.html"));
    });
}

if (!process.env.RBCYBER_WEB_PORT) {
    console.error("Error: RBCYBER_WEB_PORT environment variable is not set.");
    process.exit(1);
}

app.listen(process.env.RBCYBER_WEB_PORT, () => {
    console.log(
        `rbcyber-web-backend is running on port ${process.env.RBCYBER_WEB_PORT}`,
    );
});
