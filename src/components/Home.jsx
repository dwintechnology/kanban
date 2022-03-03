import CardList from "./CardList";
import tasks from "../constants"

function Home() {



  return (
    <div style={{display:"flex", justifyContent:"space-around", marginTop:"30px"}}>
      <CardList tasks={tasks} status={"To Do"}/>
      <CardList tasks={tasks} status={"In Progress"}/>
      <CardList tasks={tasks} status={"Done"}/>
    </div>
  );
}

export default Home;
