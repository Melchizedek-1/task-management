const express = require("express");
const { createTask, getTasks, updateTask, deleteTask } = require("../controllers/task");
const router = express.Router();

router.route("/").post(createTask);
router.route("/").get(getTasks);
router.route("/:id").put(updateTask);
router.route("/:id").delete(deleteTask);

module.exports = router;