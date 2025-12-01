require("dotenv").config();
const mongoDB = require("./config/db");
const app = require("./app");

const server = app;

mongoDB();

server.listen(process.env.PORT, () =>
  console.log(`Server is running on Port ${process.env.PORT}`)
);
