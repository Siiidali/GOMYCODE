import { genSalt, hash } from "bcrypt";
export const hashPassword = async (password) => {
  const salt = await genSalt();
  const hashedPassword = await hash(password, salt);
  return hashedPassword;
};
