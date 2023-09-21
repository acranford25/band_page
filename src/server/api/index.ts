import { Router } from "express";
import { songsRouter } from "./songs";
import { videosRouter } from "./videos";
import { picsRouter } from "./pics";

export const apiRouter = Router();

apiRouter.use("/songs", songsRouter);
apiRouter.use("/videos", videosRouter);
apiRouter.use("/pics", picsRouter);

apiRouter.post("/test", (req, res) => {
  req.body.message += " " + req.headers("x-custom");
  res.json(req.body);
});
