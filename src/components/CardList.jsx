import { Card } from "antd";
import Draggable from "react-draggable";
import CardItem from "./CardItem";

function CardList({ tasks, status }) {
  return status.map((e, i)=>{
    return (
           <div key={i}>
        <Card
        
          title={e}
          bordered={false}
          style={{
            width: 300,
            backgroundColor: "transparent",
            padding: "10px",
          }}
        >
          <div
            style={{
              width: 300,
              backgroundColor: "transparent",
              padding: "10px",
              position: "fixed",
              overflowY: "auto",
              height: "100%",
            }}
          >
            {tasks?.map((el, i) => {
              const element = JSON.parse(el.description);
  
              if (element.status === e) {
                return (
                  <CardItem
                    item={el}
                    key={el._id}
                    i={i}
                    title={element.title}
                    description={element.description}
                    tasks={tasks}
                  />
                );
              }
            })}
          </div>
        </Card>
      </div>
    );
  })
  
}

export default CardList;
