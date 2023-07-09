const express = require("express");
const app = express();
const PORT = 8000;

app.get("/api/v1/tasks", (req, res) => {
    res.send("Get the all tasks");
});

app.post("/api/v1/tasks", (req, res) => {
    res.send("Created the new task");
});

app.listen(PORT, console.log("Server is started"));