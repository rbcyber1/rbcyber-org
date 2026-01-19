import { createServer } from "http";
import express from "express";

const app = express();
const server = createServer(app);

app.get("/", (req, res) => {
    res.send(
        "rbcyber.org is currently undergoing maintenance. Please check back later.",
    );
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
