import { NextFunction, Request, Response } from "express";
import { ctx } from "../ctx";
import { userRepository } from "./repository";
import { v } from "./validators";

const { httpstatus } = ctx;
const registerCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    const body = v.userRegistrationValidator.parse(req.body);
    const user = await userRepository.register(body);
    return res.status(httpstatus.CREATED).send({ user, isSuccess: true });
  } catch (error) {
    next(error);
  }
};

const listCustomers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await userRepository.listCustomer();
    return res.status(httpstatus.OK).send({ users, isSuccess: true });
  } catch (err) {
    next(err);
  }
};

const deleteCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
  } catch (err) {}
};
export const userHandlers = {
  registerCustomer,
  listCustomers,
  deleteCustomer
};
