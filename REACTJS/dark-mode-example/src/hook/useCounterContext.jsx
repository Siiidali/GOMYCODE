import { useContext } from "react";
import { CounterContext } from "../context/counterContext";

export const useCounterContext = () => {
  const context = useContext(CounterContext);
  if (!context) return new Error("context didin't work");
  return context;
};
