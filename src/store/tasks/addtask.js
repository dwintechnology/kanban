import tasksSlice from ".";


const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIwYTM2NmI5OTU2OTAwMTcxNWZhNGIiLCJpYXQiOjE2NDYzMDYxNTF9.HRcfSTc5rGkLna58i1um9-gIJHVVk_mM2RNZI1tf1ag";
function postTasks ({ title}, {description }){
    const { setTasks } = tasksSlice.actions;
    console.log(title, "tritle", "description", description)
    return async (dispatch) => {
        try {
            const response = await fetch(`https://api-nodejs-todolist.herokuapp.com/task`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ "description": `{\"status\":\"To Do\",\"title\":\"${title}\",\"description\":\"${description}\"}` })
            });
            const data = await response.json();
            const newData = { count: data.data.length, data: data.data }
            dispatch(setTasks(newData));
        } catch (err) {
            console.error(err);
        }
    };
};

const changeTaskStatus = () => {
    return async (dispatch) => {

    }
}
export const addTask = {
    postTasks
}