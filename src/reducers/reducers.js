import {
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  LOAD_TASKS,
} from "../actions/actions";

// Initial state for the reducer
const initialState = {
  tasks: loadTasksFromLocalStorage(), // Load tasks from local storage initially
};

// Function to load tasks from local storage
function loadTasksFromLocalStorage() {
  const tasksJSON = localStorage.getItem("tasks"); // Retrieve tasks from local storage
  return tasksJSON ? JSON.parse(tasksJSON) : []; // Parse JSON or return empty array
}

// Function to save tasks to local storage
function saveTasksToLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks)); // Save tasks to local storage as JSON
}

// Root reducer function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      // Add a new task to the tasks array
      const newTasksAdd = [
        ...state.tasks,
        { text: action.payload, completed: false },
      ];
      // Save updated tasks to local storage
      saveTasksToLocalStorage(newTasksAdd);
      // Return updated state with new tasks array
      return {
        ...state,
        tasks: newTasksAdd,
      };
    case DELETE_TASK:
      // Remove a task from tasks array based on index
      const newTasksDelete = state.tasks.filter(
        (_, index) => index !== action.payload
      );
      // Save updated tasks to local storage
      saveTasksToLocalStorage(newTasksDelete);
      // Return updated state with new tasks array
      return {
        ...state,
        tasks: newTasksDelete,
      };
    case COMPLETE_TASK:
      // Toggle completion status of a task
      const newTasksComplete = state.tasks.map((task, index) =>
        index === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
      // Save updated tasks to local storage
      saveTasksToLocalStorage(newTasksComplete);
      // Return updated state with new tasks array
      return {
        ...state,
        tasks: newTasksComplete,
      };
    case LOAD_TASKS:
      // Load tasks from action payload
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
