import z from "zod";
import { config } from "dotenv";
config({ path: ".env" });
const ENV = z.object({
  HOST: z.literal(process.env.HOST),
  PORT: z.literal(process.env.PORT),
  USER: z.literal(process.env.USER),
  DATABASE: z.literal(process.env.DATABASE),
  DB_PORT: z.literal(process.env.DB_PORT),
  PASSWORD: z.literal(process.env.PASSWORD),
  JWT_SECRET: z.literal(process.env.JWT_SECRET),
  DATABASE_URL: z.literal(process.env.DATABASE_URL),
});

export const ENV_VARS = ENV.parse(process.env);
