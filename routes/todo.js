const express = require("express");
const router = express.Router();
const todoCon = require("../controllers/todo");


router.get("/", todoCon.homeController);
  
router.get("/addTodo", todoCon.addTodoFormController);
  
router.get("/updateTodo", todoCon.updateTodoFormController);
  
router.get("/deleteTodo", todoCon.deleteTodoFormController );
  
router.post("/addTodo",todoCon.addTodoControllerPost);

router.post("/updateTodo/:id",todoCon.updateTodoControllerPost );   //  if "/:id " we do not pass then we can't use req.params 

router.get("/confirmDelete", todoCon.confirmDeleteTodo);
module.exports = router;