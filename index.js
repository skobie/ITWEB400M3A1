const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/project1', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const TaskSchema = new mongoose.Schema({
  task: String,
  category: String,
  deadline: Date,
  completed: Boolean,
});

const Task = mongoose.model('Task', TaskSchema);

// Routes
app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post('/tasks', async (req, res) => {
  const newTask = new Task(req.body);
  await newTask.save();
  res.json(newTask);
});

app.put('/tasks/:id', async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTask);
});

app.delete('/tasks/:id', async (req, res) => {
    try {
      await Task.findByIdAndDelete(req.params.id);
      res.json({ message: 'Task deleted' });
    } catch (error) {
      res.status(500).json({ error: 'Task deletion failed' });
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});