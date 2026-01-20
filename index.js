import { createServer } from "http";
import express from "express";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const server = createServer(app);

const PORT = process.env.PORT || 3000; // Set an intended port using dotenv

app.get("/", (req, res) => {
    res.send(
        "rbcyber.org is currently undergoing maintenance. Please check back later.",
    );
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
