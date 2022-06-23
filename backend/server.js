const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

const goalRouter = require("./routes/goalRoutes");

const app = express();

app.use("/api/goals", goalRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
