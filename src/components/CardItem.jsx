import { Card } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import tasksSlice from "../store/tasks/";
import {Delete} from "../store/tasks/delete"


let currentItem = null;
function CardItem({ i, item, title, description, tasks }) {
  let dispatch = useDispatch();
  const { setTasks } = tasksSlice.actions;
  function dragOverHandler(e) {
    e.preventDefault();
  }
  function dragLeaveHandler(e) {}
  const dragStartHandler = (e, i) => {
    currentItem = i;
  };
  function dragEndHandler(e) {}
  const dropHandler = (e, i, currentItem) => {
    e.preventDefault();
    let tempArray = [...tasks];
    let a, b;
    a = tempArray.splice(currentItem, 1);
    b = tempArray.splice(i);
    let resArray = tempArray.concat(a, b);
    dispatch(setTasks({ count: resArray.length, data: resArray }));
  };
  let id = tasks[i]._id
  return (
    <div>
      <Card
        draggable={true}
        onDragOver={(e) => dragOverHandler(e)}
        onDragLeave={(e) => dragLeaveHandler(e)}
        onDragStart={(e) => dragStartHandler(e,  i)}
        onDragEnd={(e) => dragEndHandler(e)}
        onDrop={(e) => dropHandler(e, i, currentItem)}
        
        bordered={false}
        style={{
          width: "100%",
          border: "1px solid black",
          marginTop: "10px",
          display:"flex",
          justifyContent:"space-between"
        }}
      >
        <div style={{display:"flex", justifyContent:"end"}}>
        <button onClick={() => {
          Delete.onDelete(id={id}, dispatch={dispatch})
          
          }} >X</button>
        </div>
          <div>
          <h1>{title}</h1>
          
        <p>{description}</p>
        </div>
        
      </Card>
    </div>
  );
}

export default CardItem;
