const express = require("express");
const cors = require("cors");

const taskRoutes = require("./routes/task.route");
const taskService = require("./services/task.service");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/tasks", taskRoutes);
// console.log(taskModal);


module.exports = app;
