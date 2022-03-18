import { createSlice } from "@reduxjs/toolkit";
import { initialTasksState } from "./initialState.js";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialTasksState,
  reducers: {
    setTasks(state, action) {
      action.payload.data = action.payload.data?.map((data) => ({
        ...data,
        description: JSON.parse(
          data.description.replaceAll("\n", "").replaceAll("\t", "")
        ),
      }));
      state.taskList = { ...action.payload };
      state = { ...state };
    },
  },
});
