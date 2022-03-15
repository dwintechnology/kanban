import tasksSlice from ".";

async function taskOperation({response}, {dispatch}){
    const { setTasks } = tasksSlice.actions;
    const data = await response.json();
    const newData = { count: data?.data?.length, data: data?.data }
    dispatch(setTasks(newData));
}
export default taskOperation