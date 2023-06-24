import React, { useState } from "react";
import classes from "./TaskForm.module.css";

const TaskForm = ({ onTaskAdd }) => {
  const [task, setTask] = useState({
    name: "",
    description: "",
    date: "",
    priority: "",
  });

  const [showTask, setShowTask] = useState(false);

  const onChangeHandler = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskAdd(task);
    setTask({ name: "", description: "", date: "", priority: "" });
    setShowTask(true);
  };

  const handleDelete = () => {
    setShowTask(false);
  };

  const handleToggle = () => {
    setShowTask(!showTask);
  };

  return (
    <div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <label htmlFor="name">Task Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={task.name}
          onChange={onChangeHandler}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={task.description}
          onChange={onChangeHandler}
        ></textarea>

        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={task.date}
          onInput={onChangeHandler}
        />

        <label htmlFor="priority">Priority</label>
        <select
          id="priority"
          name="priority"
          value={task.priority}
          onChange={onChangeHandler}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <button type="submit">Add task</button>
      </form>

      {showTask && (
        <div>
          <h2>Uneseni podaci:</h2>
          <p>Ime zadatka: {task.name}</p>
          <p>Opis: {task.description}</p>
          <p>Datum: {task.date}</p>
          <p>Prioritet: {task.priority}</p>
          <button onClick={handleDelete}>Delete Task</button>
          <button onClick={handleToggle}>
            {showTask ? "Hide" : "Show"} Details
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskForm;
