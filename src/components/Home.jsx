import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { tasksOp, tasksSel } from "../store/tasks";
import { Wrapper } from "./Board";
import AddTask from "./AddTask";
import "../style/home.css";
import {
  FolderAddOutlined,
} from "@ant-design/icons";

function Home() {
  const dispatch = useDispatch();
  const taskList = useSelector(tasksSel.tasksSelector);
  let navigate = useNavigate();
  const tasks = taskList?.data;
  let [openAdd, setOpenAdd] = useState();


  useEffect(() => {
    dispatch(tasksOp.getTasks());
  }, [dispatch]);
  if (!localStorage.getItem("token")) {
    navigate("/login");
  }
  return (
    <div>
      <div className="linkBtnDiv">
        <div className="linkBtn">
          <button
            onClick={() => {
              localStorage.removeItem("token");

            }}
          >
            <Link className="linkLogOut" to="/login">Log Out</Link>
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setOpenAdd(!openAdd)
            }}
            className="addButton"
          >
            <FolderAddOutlined />
          </button>
        </div>
      </div>
      <div className="homeParent">

        <div className="parent">
          <div className="parentChild">
            <Wrapper status={["To Do", "In Progress", "Done"]} tasks={tasks} />
            {openAdd && <AddTask />}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
