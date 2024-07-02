import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('Work');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task && category && deadline) {
      addTask({ task, category, deadline, completed: false });
      setTask('');
      setCategory('Work');
      setDeadline('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
      </select>
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;