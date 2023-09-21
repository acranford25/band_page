import { Router } from "express";
import { catchAsyncError } from "../catchAsyncError";
import { execQuery } from "../../db/execQuery";

export const videosRouter = Router();

videosRouter.get(
  "/",
  catchAsyncError(async (req, res) => {
    const { rows } = await execQuery(/* SQL */ `
          SELECT *
          FROM videos
          ORDER BY id asc
          `);

    res.json(rows);
  })
);
