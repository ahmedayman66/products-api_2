const express = require("express");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");
const healthRouter = require("./Routers/healthRouter");
const userRouter = require("./Routers/userRouter");
const taskRouter = require("./Routers/taskRouter");

const app = express();

app.use(express.json());
app.use(logger);

// Routes
app.use("/api", healthRouter);
app.use("/api/users", userRouter);
app.use("/api/tasks", taskRouter);

app.use(errorHandler);

module.exports = app;
