const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Get the all tasks");
});

router.post("/", (req, res) => {
    res.send("Created the new task");
});

router.get("/:id", (req, res) => {
    res.send("Got the specific task");
});

router.patch("/:id", (req, res) => {
    res.send("Updated the specific task");
});

router.delete("/:id", (req, res) => {
    res.send("Deleted the specific task");
});

module.exports = router;