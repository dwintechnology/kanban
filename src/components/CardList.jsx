import { Card } from "antd";
import Draggable from "react-draggable";
import CardItem from "./CardItem";

function CardList({ tasks, status }) {
  let item = tasks.map((el, i) => {
    const element = JSON.parse(el.description);

    if (element.status === status) {
      return (
        <CardItem
          key={el._id}
          i={i}
          title={element.title}
          description={element.description}
          tasks={tasks}
        />
      );
    } else return null;
  });

  return (
    <div>
      <Card
        title={status}
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
          {item}
        </div>
      </Card>
    </div>
  );
}

export default CardList;
