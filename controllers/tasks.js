const getAllTasks = (req, res) => {
    res.send("Get the all tasks");
};

const createTask = (req, res) => {
    res.send("Created the new task");
};

const getSingleTask = (req, res) => {
    res.send("Got the specific task");
};

const updateTask = (req, res) => {
    res.send("Updated the specific task");
};

const deleteTask = (req, res) => {
    res.send("Deleted the specific task");
};

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask,
};