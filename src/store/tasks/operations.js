import taskOperation from "./setTaskOperation";
import { constants } from "../../constants";
const getTasks = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${constants.api}`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${constants.token}`
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

