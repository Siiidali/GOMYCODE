import React, { useState } from "react";

const generateId = (array) => {
  const ids = array.map((item) => item.id);
  return Math.max(...ids) + 1;
};

const AddTodo = ({ todos, setTodos }) => {
  const [todoInput, setTodoInput] = useState("");

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoInput) {
      const newTodo = {
        id: generateId(todos),
        content: todoInput.trim(),
        completed: false,
      };

      setTodos([newTodo, ...todos]);
      setTodoInput("");
    }
  };

  return (
    <div className="form-control">
      <div className="checkbox-border-wrap">
        <span className="checkbox"></span>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="todoInput">Add New Todo</label>
        <input
          type="text"
          name="todo-input"
          className="todo-input"
          id="todoInput"
          placeholder="Create a new todo..."
          value={todoInput}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default AddTodo;
