import { useCounterContext } from "./hook/useCounterContext";

const Home = () => {
  const { counter, dispatch } = useCounterContext();

  return (
    <div className="home">
      <h1>Counter app</h1>
      <h4>{counter}</h4>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT_BY_AMOUNT", payload: 200 });
        }}
      >
        increment by amount
      </button>
    </div>
  );
};

export default Home;
