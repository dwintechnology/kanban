import { Card } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import tasksSlice from "../store/tasks/";
import {Delete} from "../store/tasks/delete"

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIwYTM2NmI5OTU2OTAwMTcxNWZhNGIiLCJpYXQiOjE2NDYzMDYxNTF9.HRcfSTc5rGkLna58i1um9-gIJHVVk_mM2RNZI1tf1ag";
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
        title={title}
        bordered={false}
        style={{
          width: "100%",
          border: "1px solid black",
          marginTop: "10px",
        }}
      >
        
        <p>{description}</p>
        <button onClick={() => {
          Delete.onDelete(id={id})
          
          }} >X</button>
      </Card>
    </div>
  );
}

export default CardItem;
