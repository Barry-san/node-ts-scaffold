import { db } from "./db/db";
import { dbSchema, dbSchemaType } from "./db/schema";
import { StatusCodes } from "http-status-codes";

export interface Context {
  db: typeof db;
  schema: dbSchemaType;
  httpstatus: typeof StatusCodes;
}
export const httpstatus = StatusCodes;
const createContext = (): Context => {
  return {
    db: db,
    schema: dbSchema,
    httpstatus,
  };
};

export const ctx = createContext();
