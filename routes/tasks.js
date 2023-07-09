const express = require("express");
const router = express.Router();

router.get("/api/v1/tasks", (req, res) => {
    res.send("Get the all tasks");
});

router.post("/api/v1/tasks", (req, res) => {
    res.send("Created the new task");
});

router.get("/api/v1/tasks/:id", (req, res) => {
    res.send("Got the specific task");
});

router.patch("/api/v1/tasks/:id", (req, res) => {
    res.send("Updated the specific task");
});

router.delete("/api/v1/tasks/:id", (req, res) => {
    res.send("Deleted the specific task");
});

module.exports = router;