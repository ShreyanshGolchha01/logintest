import express from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./auth/auth.js";
const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server Working");
});
 
export default app;