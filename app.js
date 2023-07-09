const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");

const PORT = 8000;



app.listen(PORT, console.log("Server is started"));