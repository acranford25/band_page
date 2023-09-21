import { Router } from "express";
import { catchAsyncError } from "../catchAsyncError";
import { execQuery } from "../../db/execQuery";

export const songsRouter = Router();

songsRouter.get(
  "/",
  catchAsyncError(async (req, res) => {
    const { rows } = await execQuery(/* SQL */ `
          SELECT *
          FROM songs
          ORDER BY id asc
          `);

    res.json(rows);
  })
);
