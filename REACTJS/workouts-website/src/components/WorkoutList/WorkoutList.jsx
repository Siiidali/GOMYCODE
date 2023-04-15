import { useEffect } from "react";
import { useWorkoutsContext } from "../../hooks/useWorkoutContext";
import style from "./style.module.css";
import Counter from "../Counter/Counter";

const WorkoutList = () => {
  const { state, dispatch } = useWorkoutsContext();
  useEffect(() => {
    fetch("http://localhost:8000/workouts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: "SET_WORKOUTS", payload: data });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className={style.workout_list}>
      <h1>Woukrouts List !</h1>
      {state.workouts &&
        state.workouts.map((workout) => (
          <div key={workout.id} className={style.workout_detaills}>
            <h3>{workout.title}</h3>
            <p>rips : {workout.rips}</p>
            <p>loads : {workout.loads}</p>
          </div>
        ))}
      <Counter />
      <br />
      <br />
    </div>
  );
};

export default WorkoutList;
