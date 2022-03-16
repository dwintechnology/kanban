import { constants } from "../../constants";

export async function Updatefetches(id, status, description, name ) {
  try {
    await fetch(`${constants.api}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        completed: false,
        description: `{\"status\":\"${status}\",\"title\":\"${name}\",\"description\":\"${description}\"}`,
      }),
    });
  } catch (err) {
    console.error(err);
  }
}