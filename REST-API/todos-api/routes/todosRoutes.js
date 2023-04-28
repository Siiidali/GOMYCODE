const express = require("express");
const todosControllers = require("../controllers/todosControllers");
const router = express.Router();

router.get("/", todosControllers.getTodos);
router.get("/:id", todosControllers.getTodo);
router.post("/", todosControllers.createTodo);
router.delete("/:id", todosControllers.deleteTodo);
router.put("/:id", todosControllers.updateTodo);

module.exports = router;
