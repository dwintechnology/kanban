import { createSelector } from "reselect";

const tasks = (state) => state.tasks;

const tasksSelector = createSelector([tasks], ({ taskList }) => taskList);

export const tasksSel = {
  tasksSelector,
};
