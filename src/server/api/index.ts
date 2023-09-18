import { Router } from "express";

export const apiRouter = Router();

apiRouter.post("/test", (req, res) => {
  req.body.message += " " + req.headers("x-custom");
  res.json(req.body);
});
