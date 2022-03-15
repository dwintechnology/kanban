import tasksSlice from ".";


export async function fetches({id, description, columnName, name}){
    try {
        await fetch(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIwYTM2NmI5OTU2OTAwMTcxNWZhNGIiLCJpYXQiOjE2NDYzMDYxNTF9.HRcfSTc5rGkLna58i1um9-gIJHVVk_mM2RNZI1tf1ag`,
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