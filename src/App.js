import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { addTask, deleteTask } from "./actions/actions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const tasks = useSelector((state) => state.tasks); // Selecting tasks from Redux store
  const dispatch = useDispatch(); // Creating a dispatch function

  const handleAddTask = (task) => {
    dispatch(addTask(task)); // Dispatching addTask action
  };

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index)); // Dispatching deleteTask action
  };

  return (
    <div className="app-container">
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>To-Do List</h1>
      <TaskInput addTask={handleAddTask} />
      {/* Rendering TaskInput component */}
      <TaskList tasks={tasks} deleteTask={handleDeleteTask} />
      {/* Rendering TaskList component */}
    </div>
  );
};

export default App;
