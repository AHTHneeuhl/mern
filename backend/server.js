const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middlewares/errorMiddleware");
const PORT = process.env.PORT || 5000;

const goalRouter = require("./routes/goalRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
