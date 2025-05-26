const moment = require("moment");
const todo = require("../models/Todo");

const homeController = async (req, res, next) => {
  try {
    const todos = await todo.find().sort({ createdAt: -1 });

    // res.locals.moment = moment;

    res.render("index", { title: "List todo", todos, moment });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addTodoFormController = (req, res, next) => {
  try {
    res.render("addTodo", { title: "Add new list" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTodoFormController = async (req, res, next) => {
  try {
    const {id} = req.query;
    const todoForUpdate = await todo.findById(id);
    res.render("updateTodo", { title: "Edit todo" , todoForUpdate});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTodoFormController = async (req, res, next) => {
    try {
      const {id} = req.query;
      // delete_Todo = await todo.findById(id);
      res.render("deleteTodo", { title: "Delete todo" , id});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

const addTodoControllerPost =  async (req,res,next)=>{
    try{
      const { title, desc} = req.body;
  
      if( !title ){
        return res.status(400).json({ message: "Title is required"});
      }
      
      const newTodo = new todo({title, desc});
      await newTodo.save();
      res.redirect("/");
    }catch(error){
      res.status(500).json({ message: error.message});
    }
  };

const updateTodoControllerPost = async (req,res,next)=>{
  try{
    const { id } = req.params;
    const { title , desc} = req.body;

    const todoFound = await todo.findById(id);
    todoFound.title = title;
    todoFound.desc = desc;
    await todoFound.save();

    res.redirect("/");
  }catch(error){
    res.status(500).json({ message: error.message});
  }
};

const confirmDeleteTodo = async (req,res,next)=>{
  try{
    // const {id} = req.params;
    // await todo.findByIdAndDelete(id);
    // res.redirect("/");

    const { id, confirm } = req.query;

    if(confirm === "yes")
      await todo.findByIdAndDelete(id);
    
    res.redirect("/");
  }catch(error){
    res.status(500).json({ message: error.message});
  }
}

module.exports = {
  homeController,
  addTodoFormController,
  updateTodoFormController,
  deleteTodoFormController,
  addTodoControllerPost,
  updateTodoControllerPost,
  confirmDeleteTodo
};
