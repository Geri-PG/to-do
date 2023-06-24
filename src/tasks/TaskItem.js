import React, { useState } from "react";
import classes from "./TaskItem.module.css";

const TaskItem = ({ task, onDelete }) => {
  const [show, setShow] = useState(false);
  const [over, setOver] = useState(false);

  const handleOff = () => {
    setShow(!show);
  };
  const handleOver = () => {
    setOver(!over);
  };

  return (
    <li className={`${classes.taskItem} ${over ? classes.over : ""}`}>
      <p>{task.name}</p>
      <div>
        <button className={classes.buttonSH} onClick={handleOff}>
          {show ? "Hide" : "Show"}
        </button>

        {show && (
          <div>
            <p>Name: {task.name}</p>
            <p>Description: {task.description}</p>
            <p>Date: {task.date}</p>
            <p>Priority: {task.priority}</p>
          </div>
        )}
        <button className={classes.buttonD} onClick={onDelete}>
          Delete
        </button>
        {!over && (
          <button className={classes.buttonC} onClick={handleOver}>
            It's over
          </button>
        )}
      </div>
    </li>
  );
};

export default TaskItem;
