/**
 * @description Register new user
 * @enpoint POST /api/users
 * @access Public
 */
const registerUser = (req, res) => {
  res.json({ message: "Register User" });
};

/**
 * @description Authenticate user
 * @enpoint POST /api/users/login
 * @access Public
 */
const loginUser = (req, res) => {
  res.json({ message: "Login User" });
};

/**
 * @description Get user information
 * @enpoint GET /api/users/me
 * @access Public
 */
const getUser = (req, res) => {
  res.json({ message: "Get User" });
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
};
