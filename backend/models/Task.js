const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    status: {
        type: String,
    },
    description: {
        type: String,
    },
},
    { timestamps: true }
);

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;