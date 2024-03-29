import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/actions";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch(); // Get dispatch function from Redux

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask(task)); // Dispatch addTask action
      setTask("");
    }
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <Form onSubmit={handleSubmit} style={{ maxWidth: "600px" }}>
        <div style={{ display: "flex" }}>
          <FormControl
            type="text"
            value={task}
            onChange={handleChange}
            placeholder="Enter task to do"
            style={{
              borderRadius: "10px",
              borderColor: "transparent",
              boxShadow: "none",
              outline: "none",
            }}
          />
          <Button type="submit" style={{ marginLeft: "10em", width: "200px" }}>
            Add Task
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default TaskInput;
