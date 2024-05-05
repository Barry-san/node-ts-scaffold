import { Router } from "express";
import { userHandlers } from "./handlers";

export const customerRouter = Router();

customerRouter.post("/register", userHandlers.registerCustomer);
customerRouter.get("/listCustomers", userHandlers.listCustomers);
  