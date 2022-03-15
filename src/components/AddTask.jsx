import { useState } from "react";
import { addTask } from "../store/tasks/addtask";
import { useDispatch } from "react-redux";
import {FolderAddOutlined, PlusCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";
import "../style/addtask.css"

function AddTask(){
    const[openAddDiv, setOpenAddDiv] = useState(false)
    let [title, setTitle] = useState()
    let [description, setDescription] = useState()
    const dispatch = useDispatch();
    return(
        <>
        <div>
        <button onClick={()=>{setOpenAddDiv(!openAddDiv)}} className="addButton">
        <FolderAddOutlined />
        
        </button>
        </div>

        {openAddDiv && <div className="addDiv">        
        <div>
        <div>
        <button onClick={()=>{setOpenAddDiv(!openAddDiv)}} className="closeButton">
        
        <CloseCircleTwoTone />  
        
        </button>      
        </div>  
        <label>TITLE</label>  
        <input type="text" onChange={(e)=>{setTitle(e.target.value)}}/>
        <label>Description</label>
        <input type="text" onChange={(e)=>{setDescription(e.target.value)}}/>     
        <button className="addButton" onClick={()=>{
            setOpenAddDiv(!openAddDiv)
            dispatch (addTask.postTasks(title={title}, description={description}))
        }}>
            <PlusCircleTwoTone />
        </button>
        </div>
        </div>
        }
        </>
    )
}
export default AddTask