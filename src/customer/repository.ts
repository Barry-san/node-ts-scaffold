import { eq } from "drizzle-orm";
import { ctx } from "../ctx";
import { CustomerDeleteRequest, CustomerRegisterRequest } from "../types/customer";

const customerTable = ctx.schema.customer;

const customer = {
  firstName: customerTable.firstName,
  lastName: customerTable.lastName,
  email: customerTable.email,
  id: customerTable.id,
  createdAt: customerTable.createdAt,
};

const register = async (customerRequest: CustomerRegisterRequest) => {
  const [user] = await ctx.db
    .insert(customerTable)
    .values(customerRequest)
    .returning(customer);
  return user;
};

const listCustomer = async () => {
  const users = await ctx.db.select(customer).from(customerTable);
  return users;
};

const deleteCustomer = async (customerRequest: CustomerDeleteRequest) => {
  const deletedUser = await ctx.db.delete(customerTable).where(eq(customer.email, customerRequest.email))
  return deletedUser
}
export const userRepository = {
  register,
  listCustomer,
  deleteCustomer
};
