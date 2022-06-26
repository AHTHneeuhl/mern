const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();

const { errorHandler } = require("./middlewares/errorMiddleware");
const connectDB = require("./config/db");
const goalRouter = require("./routes/goalRoutes");
const userRouter = require("./routes/userRoutes");
const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRouter);
app.use("/api/users", userRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
