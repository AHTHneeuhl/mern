const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");

/**
 * @description Register new user
 * @enpoint POST /api/users
 * @access Public
 */
const registerUser = asyncHandler(async (req, res) => {
  const { username, name, email, password } = req.body;

  if (!username || !name || !email || !password) {
    res.status(400);
    throw new Error("Please add all required fields");
  }

  const userExists = await User.findOne({ username });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    username,
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      username: user.username,
      name: user.name,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User details");
  }
});

/**
 * @description Authenticate user
 * @enpoint POST /api/users/login
 * @access Public
 */
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login User" });
});

/**
 * @description Get user information
 * @enpoint GET /api/users/me
 * @access Public
 */
const getUser = asyncHandler(async (req, res) => {
  res.json({ message: "Get User" });
});

module.exports = {
  registerUser,
  loginUser,
  getUser,
};
