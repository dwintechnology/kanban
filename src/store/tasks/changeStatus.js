import tasksSlice from ".";
import { constants } from "../../constants";

export async function fetches({id, description, columnName, name}){
    try {
        await fetch(`${constants.api}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
           body:JSON.stringify({
            "completed": false,
            "description": `{\"title\":\"${name}\",\"description\":\"${description}\",\"status\":\"${columnName}\"}`
        
        })
        });
      
       
    } catch (err) {

        console.error(err);
    }
} 