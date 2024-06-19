import express, { Request, Response } from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Hello, world!" });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});