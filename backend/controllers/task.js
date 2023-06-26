const Task = require("../models/Task");

//  @desc Create task
exports.createTask = async (req, res, next) => {
    const { title, description, status } = req.body;

    try {
        const createdTask = await Task.create({ title, description, status });

        res.status(201).json({
            success: true,
            createdTask
        });

    } catch (error) {
        next(error);
    }
}

//  @desc Get all tasks
exports.getTasks = async (req, res, next) => {
    const tasks = await Task.find();

    res.status(200).json({
        success: true,
        tasks,
    })
    
}

//  @desc Update task
exports.updateTask = async (req, res, next) => {
    const tasks = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json({
        success: true,
        tasks
    })
    
}

//  @desc Delete task
exports.deleteTask = async (req, res, next) => {
    await Task.findByIdAndDelete(req.params.id)

    res.status(200).json({
        success: true,
        message: "Task deleted!"
    })
    
}