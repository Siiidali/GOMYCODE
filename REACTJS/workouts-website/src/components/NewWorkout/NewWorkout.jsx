import { useState } from "react";
import { useWorkoutsContext } from "../../hooks/useWorkoutContext";
import style from "./style.module.css";

const NewWorkout = () => {
  const [title, setTitle] = useState("");
  const [rips, setRips] = useState("");
  const [loads, setLoads] = useState("");
  const { state, dispatch } = useWorkoutsContext();

  const submitHandler = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/workouts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        title,
        rips,
        loads,
      },
    }).then((data) => {
      dispatch({ type: "ADD_WORKOUT", payload: { title, rips, loads } });
      setTitle("");
      setLoads("");
      setRips("");
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Add new workout</h1>
      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <label>Rips</label>
      <input
        type="number"
        value={rips}
        onChange={(e) => {
          setRips(e.target.value);
        }}
      />
      <br />
      <label>Loads</label>
      <input
        type="number"
        value={loads}
        onChange={(e) => {
          setLoads(e.target.value);
        }}
      />
      <button>submit</button>
    </form>
  );
};

export default NewWorkout;
