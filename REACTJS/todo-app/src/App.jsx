import { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const data = [
  { id: 1, content: "6 hizb quaran", completed: true },
  { id: 2, content: "react next js docs", completed: false },
  { id: 3, content: "complete 3rd chaptre pfe", completed: false },
  { id: 4, content: "Read for 1 hour", completed: false },
  { id: 5, content: "work at gomycode", completed: false },
  { id: 6, content: "Complete Todo App on Frontend Mentor", completed: false },
];

function App() {
  const [todos, setTodos] = useState(data);
  const [themeLight, setThemeLight] = useState(true);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const themeClass = themeLight ? "light" : "dark";

  useEffect(() => {
    const handleFilter = () => {
      switch (filterStatus) {
        case "active":
          return setFilteredTodos(todos.filter((todo) => !todo.completed));

        case "completed":
          return setFilteredTodos(todos.filter((todo) => todo.completed));

        default:
          return setFilteredTodos(todos);
      }
    };
    handleFilter();
  }, [todos, filterStatus]);

  return (
    <div className={`wrapper ${themeClass}`}>
      <div className="container">
        <NavBar themeLight={themeLight} setThemeLight={setThemeLight} />
        <main>
          <AddTodo todos={todos} setTodos={setTodos} />
          <TodoList
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
