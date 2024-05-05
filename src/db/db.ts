import { config } from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
config({ path: ".env" });
import { Client } from "pg";
import { ENV_VARS } from "../../env";

export const client = new Client({
  host: ENV_VARS.HOST,
  port: parseInt(ENV_VARS.DB_PORT!),
  user: ENV_VARS.USER,
  database: ENV_VARS.DATABASE,
  password: ENV_VARS.PASSWORD,
});

export async function connectToDb() {
  client.connect((err) => {
    console.log("Connected");
  });
}

export const db = drizzle(client);
export const dbType = typeof db;
