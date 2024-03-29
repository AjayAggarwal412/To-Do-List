import React from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, completeTask } from "../actions/actions";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks); // Selecting tasks from Redux store
  const dispatch = useDispatch(); // Creating a dispatch function

  const handleDelete = (index) => {
    dispatch(deleteTask(index)); // Dispatching deleteTask action
  };

  const handleComplete = (index) => {
    dispatch(completeTask(index)); // Dispatching completeTask action
  };

  return (
    <div style={{ maxHeight: "500px", overflowY: "auto" }}>
      {tasks.length > 0 && ( // Rendering table only if tasks exist
        <Table
          bordered
          hover
          style={{
            marginTop: "40px",
          }}
        >
          <thead>
            <tr>
              <th>To-Do</th>
              <th style={{ textAlign: "end" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(
              (
                task,
                index // Mapping tasks to table rows
              ) => (
                <tr
                  key={index}
                  style={{
                    textDecoration: task.completed ? "line-through" : "none", // Strikethrough if task completed
                    fontWeight: task.completed ? "bold" : "normal", // Bold font if task completed
                  }}
                >
                  <td>{task.text}</td>
                  <td style={{ textAlign: "end" }}>
                    <Button
                      variant="success"
                      onClick={() => handleComplete(index)} // Handle complete button click
                      style={{ marginRight: "10px" }}
                    >
                      {task.completed ? "Undo" : "Complete"}{" "}
                      {/* Display different text based on completion state */}
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(index)}
                    >
                      {/* Handle delete button click */}
                      Delete
                    </Button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default TaskList; // Export TaskList component
