import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete }) => {
  const handleDelete = (key) => {
    onDelete(key);
  };

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task, key) => (
          <TaskItem key={key} task={task} onDelete={() => handleDelete(key)} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
