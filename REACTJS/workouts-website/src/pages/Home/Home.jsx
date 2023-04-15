import NavBar from "../../components/NavBar/NavBar";
import WorkoutList from "../../components/WorkoutList/WorkoutList";
import NewWorkout from "../../components/NewWorkout/NewWorkout";
import style from "./style.module.css";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className={style.home}>
        <WorkoutList />
        <NewWorkout />
      </div>
    </div>
  );
};

export default Home;
