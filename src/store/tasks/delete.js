import taskOperation from "./setTaskOperation";
import { constants } from "../../constants";

async function onDelete({ id }, { dispatch }) {
  try {
    await fetch(`${constants.api}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const response = await fetch(`${constants.api}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    taskOperation({ response }, { dispatch });
  } catch (err) {
    console.error(err);
  }
}

export const Delete = {
  onDelete,
};
