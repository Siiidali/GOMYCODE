import { useReducer } from "react";
import BlogList from "../BlogList/BlogList";
import style from "./style.module.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };

    default:
      return state;
  }
};

const Home = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <div className={style.home}>
      <h1>All Blogs</h1>
      <BlogList />
      <p>{state.counter}</p>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -
      </button>
    </div>
  );
};

export default Home;
