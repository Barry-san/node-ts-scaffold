import { ZodError, ZodIssue } from "zod";
import { httpstatus } from "./ctx";

export const handleErrors = (err: Error) => {
  if (err instanceof ZodError) {
    const errorMessages: string[] = [];
    for (let i = 0; i < err.errors.length; i++) {
      errorMessages.push(err.errors[i].message);
    }

    return {
      type: "Validation Error",
      error: errorMessages,
      status: httpstatus.BAD_REQUEST,
    };
  }
  return {
    type: "Internal Server Error",
    error: ` ${err.message}`,
    status: httpstatus.INTERNAL_SERVER_ERROR,
  };
};
