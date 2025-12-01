const taskModal = require("../models/task.model");

class TaskService {
  async create(task, linkedFile = null) {
    const taskData = { ...task };
    if (linkedFile) {
      taskData.linkedFile = linkedFile;
    }
    const newTask = new taskModal(taskData);
    await newTask.save();
    return newTask;
  }

  async find() {
    const tasks = await taskModal.find({});
    return tasks;
  }

  async update(id, task) {
    const updatedTask = await taskModal.findByIdAndUpdate(id, task, {
      new: true,
    });
    return updatedTask;
  }

  async delete(id) {
    const deletedTask = await taskModal.findByIdAndDelete(id);
    return deletedTask;
  }
}

module.exports = TaskService;
