import { Card } from "antd";
import CardItem from "./CardItem";

function CardList({ tasks, status }) {
  let item = tasks
    .filter((el) => el.status === status)
    .map((el, i) => {
      return <CardItem title={el.title} description={el.description} />;
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
          position: 'fixed', 
          overflowY: 'auto',
           height: "100%",

        }}>{item}</div>
      </Card>
    </div>
  );
}

export default CardList;
