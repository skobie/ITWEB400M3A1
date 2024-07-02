import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <div>
      <h3>{task.task}</h3>
      <p>{task.category}</p>
      <p>{task.deadline}</p>
      <button>Edit</button>
      <button>Complete</button>
      <button>Delete</button>
    </div>
  );
};

export default TaskItem;