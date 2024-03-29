// Define action types
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";
export const LOAD_TASKS = "LOAD_TASKS";

// Action creator to add a task
export const addTask = (task) => ({
  type: ADD_TASK, // Action type
  payload: task, // Task to be added
});

// Action creator to delete a task
export const deleteTask = (index) => ({
  type: DELETE_TASK, // Action type
  payload: index, // Index of task to be deleted
});

// Action creator to mark a task as completed or incomplete
export const completeTask = (index) => ({
  type: COMPLETE_TASK, // Action type
  payload: index, // Index of task to be marked
});

// Action creator to load tasks
export const loadTasks = (tasks) => ({
  type: LOAD_TASKS, // Action type
  payload: tasks, // Tasks to be loaded
});
