import { createContext } from "react";
import { useReducer } from "react";

export const CounterContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };

    case "DECREMENT":
      return { counter: state.counter - 1 };

    case "INCREMENT_BY_AMOUNT":
      return { counter: state.counter + action.payload };

    default:
      return state;
  }
};

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <CounterContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
