import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";
const { sign } = jwt;
import { hashPassword } from "../utils/hashPassword.js";
import { comparePasswords } from "../utils/comparePassword.js";
import * as dotenv from "dotenv";

// dotenv config
dotenv.config();

const maxAge = 3 * 24 * 60 * 60;

const create_token = (id) => {
  return sign({ id }, process.env.AUTH_SECRET, {
    expiresIn: maxAge,
  });
};

export const signUp = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Please enter all the fields" });
    }
    const users = await User.find({ email });
    if (users && users.length) {
      return res.status(400).json({ error: "Email already used" });
    }

    const hPassword = await hashPassword(password);
    const user = await User.create({ email, password: hPassword });
    if (!user) {
      return res.status(400).json({ error: "User was not created" });
    }
    const token = create_token(user._id);

    // 201 : we created this user with success .
    res.status(201).json({ success: true, email: user._id, token: token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const logIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }

    const user = await findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ error: "User doesn't exist with this e-amil" });
    }

    const result = await comparePasswords(password, user.password);
    if (!result) {
      return res.status(400).json({ error: "password incorrect" });
    }
    const token = create_token(user._id);

    res.status(200).json({ success: true, email: email, token: token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
