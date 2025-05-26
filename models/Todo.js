const mongoose = require("mongoose");

const todoAppSchema = mongoose.Schema({
    title: { type: String, required: true },
    desc: String,
  }, {timestamps: true});
  
// const todo = mongoose.model("todo", todoAppScheme);

// module.exports = todo;   // check  todo name

const Todo = mongoose.model("todo", todoAppSchema);

module.exports = Todo;