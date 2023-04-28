const User = require("../models/userModel");
const hashPassword = require("../utils/hashPassword");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { comparePasswords } = require("../utils/comparePassword");

const maxAge = 3 * 24 * 60 * 60;

const create_token = (id) => {
  return jwt.sign({ id }, process.env.AUTH_SECRET, {
    expiresIn: maxAge,
  });
};

const signUp = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Please enter all the fields" });
    }
    const users = await User.find({ email });
    if (users && users.length) {
      return res.status(400).json({ error: "Email already used" });
    }

    const hPassword = await hashPassword.hashPassword(password);
    const user = await User.create({ email, password: hPassword });
    if (!user) {
      return res.status(400).json({ error: "User was not created" });
    }
    const token = create_token(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    // 201 : we created this user with success .
    res.status(201).json({ success: true, user: user._id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
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
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });

    res.status(200).json({ success: true, user: user._id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const logout = async (req, res) => {
  req.cookie("jwt", "", { maxAge: 1 });
};

module.exports = {
  login,
  signUp,
  logout,
};
