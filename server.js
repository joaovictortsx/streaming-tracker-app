import express from "express";

/* Express configs */
const app = express();
app.use(express.json());
app.listen(3000)