import "dotenv/config";
import express from "express";
// @ts-expect-error - no types available
import volleyball from "volleyball";
import { apiRouter } from "./api";

export const app = express();

app.use(volleyball);

app.get("/test", (req, res) => {
  res.send("The sedulous hyena ate the antelope!");
});

app.use("/api", apiRouter);
