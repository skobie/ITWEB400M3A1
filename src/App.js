import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import FilterOptions from './components/FilterOptions';
import CategoryList from './components/CategoryList';
import CalendarView from './components/CalenderView';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState(['Work', 'Personal', 'Shopping']);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:5000/tasks');
    setTasks(response.data);
  };

  const addTask = async (task) => {
    const response = await axios.post('http://localhost:5000/tasks', task);
    setTasks([...tasks, response.data]);
  };

  const updateTask = async (id, updatedTask) => {
    const response = await axios.put(`http://localhost:5000/tasks/${id}`, updatedTask);
    setTasks(tasks.map(task => (task._id === id ? response.data : task)));
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <div className="task-form">
        <TaskForm addTask={addTask} />
      </div>
      <div className="filter-options">
        <FilterOptions />
      </div>
      <div className="category-list">
        <CategoryList categories={categories} />
      </div>
      <div className="task-list">
        <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      </div>
      <div className="calendar-view">
        <CalendarView tasks={tasks} />
      </div>
    </div>
  );
};

export default App;