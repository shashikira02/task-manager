const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["TODO", "DONE"],
      default: "TODO",
    },
    linkedFile:{
      data: Buffer,
      contentType: String
    },
    deadline: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const taskModal = mongoose.model("Task", taskSchema);

module.exports = taskModal;
