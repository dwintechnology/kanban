import React,{ useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { tasksOp, tasksSel } from "../store/tasks";
import {Wrapper} from "./Board";

function Home() {
  const dispatch = useDispatch();
  const taskList = useSelector(tasksSel.tasksSelector);

  const tasks = taskList?.data;


  useEffect(() => {
    dispatch(tasksOp.getTasks());
  }, [dispatch]);

  return tasks?.length ? (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "30px",
      }}
    >

      <Wrapper status={["To Do", "In Progress", "Done"]} tasks={tasks}/>
    </div>
  ) : null;
}

export default Home;
