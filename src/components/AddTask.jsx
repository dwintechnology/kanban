import { useState } from "react";
import { addTask } from "../store/tasks/addtask";
import { useDispatch } from "react-redux";
import {
  PlusCircleTwoTone,
  CloseCircleTwoTone,
} from "@ant-design/icons";
import "../style/addtask.css";
import { Updatefetches } from "../store/tasks/upDateCard";

function AddTask({id, status, setUpdatedDesc, setUpdatedName, name, desc }) {
  let [descState, setDescState] = useState(desc)
  let [nameState, setNameState] = useState(name)
  const [openAddDiv, setOpenAddDiv] = useState(true);
  let [title, setTitle] = useState();
  let [description, setDescription] = useState();
  const dispatch = useDispatch();
  return (
    <>
      {openAddDiv && (
        <div className="addDiv">
          <div>
            <div>
              <button
                onClick={() => {
                  setOpenAddDiv(!openAddDiv);
                }}
                className="closeButton"
              >
                <CloseCircleTwoTone />
              </button>
            </div>
            <label>TITLE</label>
            <input
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
                setNameState(e.target.value)
              }}
              value={nameState}
            />
            <label>Description</label>
            <input
              type="text"
              onChange={(e) => {
                setDescription(e.target.value);
                setDescState(e.target.value)
              }}
              value={descState}
            />
            {name === undefined ? <button
              className="addButton"
              onClick={() => {
                setOpenAddDiv(!openAddDiv);
                dispatch(
                  addTask.postTasks(
                    (title = { title }),
                    (description = { description })
                  )
                );
              }}
            >

              <PlusCircleTwoTone />
            </button> : <button className="upDateBtn" onClick={() => {
              setOpenAddDiv(!openAddDiv);
              setUpdatedDesc(descState)
              setUpdatedName(nameState)
              Updatefetches(id, status, descState, nameState)
            }}>Update</button>}
          </div>
        </div>
      )}
    </>
  );
}
export default AddTask;
