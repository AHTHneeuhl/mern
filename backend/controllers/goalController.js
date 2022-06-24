const asyncHandler = require("express-async-handler");

/**
 * @description Get goals
 * @endpoint GET /api/goals
 * @access Private
 */
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get goals" });
});

/**
 * @description Set goals
 * @endpoint POST /api/goals
 * @access Private
 */
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  res.status(200).json({ message: "set goal" });
});

/**
 * @description Update goals
 * @endpoint PUT /api/goals/:id
 * @access Private
 */
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "update goal" });
});

/**
 * @description Delete goals
 * @endpoint DELETE /api/goals/:id
 * @access Private
 */
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "delete goal" });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};