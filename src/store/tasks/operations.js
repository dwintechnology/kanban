import taskOperation from "./setTaskOperation";
import { constants } from "../../constants";
const getTasks = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`https://api-nodejs-todolist.herokuapp.com/task`, {
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
export const tasksOp = {
    getTasks
}

