const express = require("express");
const bodyParser = require("body-parser");
const connectMongodb = require("./init/mongodb");
const todoRoute = require("./routes/todo");
const dotenv = require("dotenv");

//  environmental variables
dotenv.config();

// console.log(process.env.NAME);

// const PORT = 8000;

//  init app
const app = express();

// mongodb connection;
connectMongodb();

// view engine
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true}));
app.use("/", todoRoute);

//  listen server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// module.exports = app;

module.exports = app;