async function LogInFetch({email}, {password}){
    // return  () => {
        try {
            const response = await fetch("https://api-nodejs-todolist.herokuapp.com/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "email": email,
                    "password": password,
                }),
            });
            const serverResponseJson = await response.json();
            console.log(serverResponseJson.token, "tokenik")
         localStorage.setItem("token", serverResponseJson.token)
            
        } catch (err) {
            console.error(err);
        }
    // };
}
export default LogInFetch