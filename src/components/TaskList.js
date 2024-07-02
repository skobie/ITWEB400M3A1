import React from 'react';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <div>
      {tasks.map(task => (
        <div key={task._id} className="task-item">
          <div>
            <h3>{task.task}</h3>
            <p>Category: {task.category}</p>
            <p>Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
            <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
          </div>
          <div>
            <button onClick={() => updateTask(task._id, { ...task, completed: !task.completed })}>
              Toggle Complete
            </button>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;