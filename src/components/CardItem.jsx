import { Card } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import tasksSlice from "../store/tasks/";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIwYTM2NmI5OTU2OTAwMTcxNWZhNGIiLCJpYXQiOjE2NDYzMDYxNTF9.HRcfSTc5rGkLna58i1um9-gIJHVVk_mM2RNZI1tf1ag";
let currentItem = null;
function CardItem({ i, item, title, description, tasks }) {
  let dispatch = useDispatch();
  const { setTasks } = tasksSlice.actions;

  const onDelete = async (id) => {
    try {
      await fetch(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (e) {
      console.log("delete error ->", e);
    }
  };
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
          // onDelete(tasks[i]._id)
          }} >X</button>
      </Card>
    </div>
  );
}

export default CardItem;
