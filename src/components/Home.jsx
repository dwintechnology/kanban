import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { tasksOp, tasksSel } from "../store/tasks";
import AddTask from "./addTask";
import CardList from "./CardList";
import "../style/home.css"


function Home() {
  const dispatch = useDispatch();
  const taskList = useSelector(tasksSel.tasksSelector);
  let navigate = useNavigate()
  const tasks = taskList?.data;


  useEffect(() => {
    dispatch(tasksOp.getTasks());
  }, [dispatch]);
  if (!localStorage.getItem("token")) {
    navigate("/login")
  }
  return (
    <div className="parent"
    >


      <CardList tasks={tasks} status={["To Do", "In Progress", "Done"]} />
      <AddTask />
      <div className="linkBtn">
        <button onClick={() => { localStorage.removeItem("token") }} ><Link to="/login">Log Out</Link></button>
      </div>

    </div>
  );
}

export default Home;
