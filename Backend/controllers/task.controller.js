const TaskService = require("../services/task.service");
const { processFileUpload, validateFileType, validateFileSize } = require("../utils/fileUpload");

const taskService = new TaskService();

const createTask = async (req, res) => {
  try {
    const task = req.body;
    
    if (req.file) {
      if (!validateFileType(req.file)) {
        return res.status(400).json({ error: 'Invalid file type. Only PDF files are allowed.' });
      }
      if (!validateFileSize(req.file)) {
        return res.status(400).json({ error: 'File size too large. Maximum 5MB allowed.' });
      }
    }
    
    const linkedFile = processFileUpload(req.file);
    const newTask = await taskService.create(task, linkedFile);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await taskService.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await taskService.update(id, req.body);
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await taskService.delete(id);
    res.status(204).json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};
