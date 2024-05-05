import { z } from "zod";

export const userRegistrationValidator = z.object({
  firstName: z
    .string({
      required_error: "First name is required!",
      invalid_type_error: "First name can only be a string!",
    })
    .max(30, { message: "First name should be a maximum of 30 characters." }),
  lastName: z
    .string({
      required_error: "Last name is required!",
      invalid_type_error: "Last name can only be a string!",
    })
    .max(30, { message: "Last name should be a maximum of 30 characters." }),
  email: z.string({ required_error: "Email is required!" }).email({
    message: "Email input is not a valid email. Please correct and try again",
  }),
});

export const userDeletionValidator = z.object({
  
})
export const v = {
  userRegistrationValidator,
};
