import { Card } from "antd";
import Draggable from "react-draggable";

function CardItem({ title, description }) {
  return (
    <Draggable>
    <div>
      <Card
        title={title}
        bordered={false}
        style={{  border: "1px solid black", marginTop: "10px" }}
      >
        <p>{description}</p>
      </Card>
    </div>
    </Draggable>
  );
}

export default CardItem;
