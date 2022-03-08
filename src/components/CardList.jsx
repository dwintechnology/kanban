import { Card } from "antd";
import CardItem from "./CardItem";
import { useDispatch } from "react-redux";
import {tasksSlice} from "../store/tasks/tasksSlice"

function CardList({ tasks, status }) {
  const { changePossition } = tasksSlice.actions;


  
  const dispatch = useDispatch();
  let item = tasks
    .map((el, i) => {
      const element = JSON.parse(el.description);

      if (element.status === status) {
        return <CardItem key={el._id} title={element.title} description={element.description} />;
      } else return null;
    });

  return (

   
         <div >
      <Card
        title={status}
        bordered={false}
        style={{
          width: 300,
          backgroundColor: "transparent",
          padding: "10px",
          
        }}
      >
        <div style={{
          width: 300,
          backgroundColor: "transparent",
          padding: "10px",
          display:"flex",
          flexDirection:"column",
          maxHeight:"90vh",
          overflow:"auto"

        }}>{item}
           <button 
           onClick={()=>{
             let temp = [...tasks];
            [temp[2], temp[3]] = [temp[3], temp[2]]
            console.log("temp", temp)
            dispatch(changePossition(temp))
      }}
      >
        ALLL
      </button> 
        </div>
      </Card>
    </div>
    
 
  );
}

export default CardList;
