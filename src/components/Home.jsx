import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { tasksOp, tasksSel } from "../store/tasks";
import CardList from "./CardList";

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
      
      <CardList tasks={tasks} status={"To Do"} />
      <CardList tasks={tasks} status={"In Progress"} />
      <CardList tasks={tasks} status={"Done"} />
      {/* <ShowTransactionList /> */}
    </div>
  ) : null;
}

export default Home;
