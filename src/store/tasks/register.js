async function RegisterFetch({ name, email, password, age }){
    try {
        await fetch("https://api-nodejs-todolist.herokuapp.com/user/register", {
             method: "POST",
             headers: {
                 "Content-Type": "application/json",
             },
             body: JSON.stringify({
                 "name": name,
                 "email": email,
                 "password": password,
                 "age": age
             }),
         });
         
     } catch (err) {
         console.error(err);
     }
}
export default RegisterFetch