import { Router } from "express";
import { catchAsyncError } from "../catchAsyncError";
import { execQuery } from "../../db/execQuery";

export const picsRouter = Router();

picsRouter.get(
  "/",
  catchAsyncError(async (req, res) => {
    const { rows } = await execQuery(/* SQL */ `
          SELECT *
          FROM pics
          ORDER BY id asc
          `);

    res.json(rows);
  })
);
