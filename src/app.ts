import { config } from "dotenv";
import express, { Express, NextFunction, Request, Response } from "express";
import { customerRouter } from "./customer/routes";
import morgan from "morgan";
import { handleErrors } from "./errors";
import { ENV_VARS } from "../env";

import { connectToDb } from "./db/db";
import cors from "cors";
config({ path: ".env" });
export const app: Express = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("tiny"));

app.use("/api/v1/customers", customerRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const errors = handleErrors(err);
  return res
    .status(errors.status)
    .json({ error_type: errors.type, error: errors.error, isSuccess: false });
});

app.listen(parseInt(ENV_VARS.PORT!), ENV_VARS.HOST!, () => {
  connectToDb();
  process.on("uncaughtException", (err) => {
    const errors = handleErrors(err);
    console.error({ error_type: errors.type, error: errors.error });
    process.exit(1);
  });
  process.on("SIGTERM", (err) => {
    console.error(err);
    process.exit(1);
  });

  console.log(
    `\n\n 🧑‍🚀🧑‍🚀🧑‍🚀 Server running at http://${ENV_VARS.HOST}:${ENV_VARS.PORT}/ 🚀🚀🚀 \n\n`
  );
});
