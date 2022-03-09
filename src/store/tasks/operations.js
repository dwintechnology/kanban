import tasksSlice from ".";

const getTasks = () => {
    const { setTasks } = tasksSlice.actions;

    return async (dispatch) => {
        try {
            const response = await fetch('https://api-nodejs-todolist.herokuapp.com/task', {
                method: "GET",
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIwYTM2NmI5OTU2OTAwMTcxNWZhNGIiLCJpYXQiOjE2NDYzMDYxNTF9.HRcfSTc5rGkLna58i1um9-gIJHVVk_mM2RNZI1tf1ag'
                }
            });

            const data = await response.json();
            const newData = {count: data.data.length , data: data.data}
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
export const tasksOp = {
    getTasks
}

