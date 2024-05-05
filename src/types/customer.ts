export type CustomerRegisterRequest = {
  firstName: string;
  lastName: string;
  email: string;
};

export type CustomerRegisterResponse = {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
};

export type UpdateCustomerPasswordRequest = {
  email: string;
  password: string;
};

type UpdateCustomerPasswordResponse = {};

export type CustomerDeleteRequest = {
  email: string;
  password: string;
};
