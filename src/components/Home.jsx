import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { tasksOp, tasksSel } from "../store/tasks";
import { Wrapper } from "./Board";
import AddTask from "./AddTask";
import "../style/home.css";

function Home() {
  const dispatch = useDispatch();
  const taskList = useSelector(tasksSel.tasksSelector);
  let navigate = useNavigate();
  const tasks = taskList?.data;

  useEffect(() => {
    dispatch(tasksOp.getTasks());
  }, [dispatch]);
  if (!localStorage.getItem("token")) {
    navigate("/login");
  }
  return (
    <div className="parent">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "30px",
        }}
      >
        <Wrapper status={["To Do", "In Progress", "Done"]} tasks={tasks} />
        <AddTask />
        <div>
          <div className="linkBtn">
            <button
              onClick={() => {
                localStorage.removeItem("token");
              }}
            >
              <Link to="/login">Log Out</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
