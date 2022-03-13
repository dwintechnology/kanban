import taskOperation from "./setTaskOperation";
import { constants } from "../../constants";
function postTasks ({ title}, {description }){
    return async (dispatch) => {
        try {
            console.log("adding", localStorage.getItem("token"))
            await fetch(`${constants.api}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({ "description": `{\"status\":\"To Do\",\"title\":\"${title}\",\"description\":\"${description}\"}` })
            });
            const response = await fetch(`${constants.api}`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            });
            taskOperation({response}, {dispatch})
        } catch (err) {
            console.error(err);
        }
    };
};
export const addTask = {
    postTasks
}