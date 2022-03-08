import { Card } from "antd";
import Draggable from "react-draggable";
import { useDispatch } from "react-redux";
import tasksSlice from "../store/tasks/"


function CardItem({ i, title, description, tasks }) {
  let dispatch = useDispatch();
  const { setTasks } = tasksSlice.actions;

  let x, y;
  return (
    <Draggable
      onStart={(evt) => {
        x = evt.screenX;
        y = evt.screenY;
        console.log(i, "start ");
      }}
      // bounds="parent"
      onStop={(evt) => {
        
        console.log(Math.round((evt.screenY - y) / 80 + i), "end");
        let stopedIndex = Math.round((evt.screenY - y) / 80 + i);
        let tempArray = [...tasks];
        let a, b;
      
        a = tempArray.splice(i, 1);
        b = tempArray.splice(stopedIndex - 1);
        let resArray = tempArray.concat(a, b);
        console.log(resArray, "resultooooooooooo")
        dispatch(setTasks(
          {count: resArray.length,
            data: resArray
          }
          ))
      }}
      // defaultClassNameDragging="valod"
    >
      <div>
        <Card
          title={title}
          bordered={false}
          style={{
            width: "100%",
            border: "1px solid black",
            marginTop: "10px",
          }}
        >
          <p>{description}</p>
        </Card>
      </div>
    </Draggable>
  );
}

export default CardItem;
