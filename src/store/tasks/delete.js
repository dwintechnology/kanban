


const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIwYTM2NmI5OTU2OTAwMTcxNWZhNGIiLCJpYXQiOjE2NDYzMDYxNTF9.HRcfSTc5rGkLna58i1um9-gIJHVVk_mM2RNZI1tf1ag";
async function onDelete ({ id }){
        try {
          await fetch(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
        } catch (e) {
          console.log("delete error ->", e);
        }
};

export const Delete = {
    onDelete
}