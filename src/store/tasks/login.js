import { constants } from "../../constants/index";

async function LogInFetch({ email }, { password }) {
  try {
    const response = await fetch(`${constants.login}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const serverResponseJson = await response.json();
    localStorage.setItem("token", serverResponseJson.token);
  } catch (err) {
    console.error(err);
  }
}
export default LogInFetch;
