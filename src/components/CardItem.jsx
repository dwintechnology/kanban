import { Card } from "antd";

function CardItem({ title, description }) {
  return (
    <div>
      <Card
        title={title}
        bordered={false}
        style={{ width: "100%", border: "1px solid black", marginTop: "10px" }}
      >
        <p>{description}</p>
      </Card>
    </div>
  );
}

export default CardItem;
