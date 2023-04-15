import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
      break;

    case "decrement":
      return { counter: state.counter - 1 };
      break;
    case "incrementByAmount":
      return { counter: state.counter + action.payload };
      break;

    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <div>
      <h1>{state.counter}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "incrementByAmount", payload: 200 });
        }}
      >
        increment by amount
      </button>
    </div>
  );
};

export default Counter;
