import CardList from "./CardList";
import tasks from "../constants"
import ShowTransactionList from "../redux/store"

function Home() {

  return (
    <div style={{display:"flex", justifyContent:"space-around", marginTop:"30px"}}>
      <CardList tasks={tasks} status={"To Do"}/>
      <CardList tasks={tasks} status={"In Progress"}/>
      <CardList tasks={tasks} status={"Done"}/>
      {/* <ShowTransactionList /> */}

    </div>
  );
}

export default Home;
