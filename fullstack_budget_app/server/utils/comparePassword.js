import { compare } from "bcrypt";

export const comparePasswords = async (password, dbPassword) => {
  return await compare(password, dbPassword);
};
