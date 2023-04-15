import { createContext } from "react";
import { useReducer } from "react";

export const WorkoutContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return { workouts: action.payload };
    case "ADD_WORKOUT":
      return { workouts: [...state.workouts, action.payload] };
    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter((w) => w.id !== action.payload.id),
      };
  }
};

export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { workouts: null });

  return (
    <WorkoutContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};
