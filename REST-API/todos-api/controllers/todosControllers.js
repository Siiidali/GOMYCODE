const { default: mongoose } = require("mongoose");
const Todo = require("../models/todosModel");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    if (!todos || !todos.length) {
      return res
        .status(404)
        .json({ error: true, message: "There is no todos" });
    }
    res.status(200).json({ success: true, todos: todos });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getTodo = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "The provided id is not valid" });
  }
  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(400).json({ error: "No such a todo" });
    }
    res.status(200).json({ succes: true, todo: todo });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const createTodo = async (req, res) => {
  const todo = req.body;
  try {
    if (!todo || !todo.content) {
      return res.status(400).json({ error: "please enter all the fileds" });
    }
    const searchTodos = await Todo.find({ content: todo.content });
    if (searchTodos || searchTodos.length) {
      return res.status(400).json({ error: "todo already existed" });
    }
    const createdTodo = await Todo.create(todo);
    res.status(201).json({ success: true, todo: createdTodo });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteTodo = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "The provided id is not valid" });
  }
  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(400).json({ error: "the todo doesn't exist" });
    }
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deleteTodo) {
      return res.json({ error: "The todo didin't be deleted" });
    }
    res.status(200).json({ success: true, deleteTodo: deletedTodo });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const updateTodo = async (req, res) => {
  const id = req.params.id;
  const { content, completed } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "The provided id is not valid" });
  }
  if (completed !== true && completed !== false && !content) {
    res.status(400).json({ error: "please enter all fields" });
  }
  try {
    const todo = {};
    if (content) todo.content = content;
    if (completed === false) todo.completed = false;
    if (completed === true) todo.completed = true;

    const updatedTodo = await Todo.findByIdAndUpdate(id, todo, {
      new: true, // return the updated document
      runValidators: true, // validate the updated document against the schema
    });
    if (!updatedTodo) {
      return res
        .status(400)
        .json({ error: "todo didin't be updated for some error" });
    }
    res.status(200).json({ success: true, updatedTodo: updatedTodo });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getTodo,
  getTodos,
  createTodo,
  deleteTodo,
  updateTodo,
};
