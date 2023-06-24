import React, { useState } from "react";

import "./App.css";
import TaskForm from "./tasks/TaskForm";
import TaskList from "./tasks/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskAdd = (task) => {
    setTasks([...tasks, task]);
  };

  const handleTaskDelete = (key) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(key, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>To-Do-List</h1>
      <TaskForm onTaskAdd={handleTaskAdd} />
      <TaskList tasks={tasks} onDelete={handleTaskDelete} />
    </div>
  );
};

export default App;
