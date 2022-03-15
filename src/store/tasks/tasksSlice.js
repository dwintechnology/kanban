import { createSlice } from "@reduxjs/toolkit";
import { initialTasksState } from "./initialState.js";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialTasksState,
  reducers: {
    setTasks(state, action) {
      state.taskList = { ...action.payload };
      state = { ...state };
    },
  },
});
