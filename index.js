const express = require('express');
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Darragh");
});

const taskRoutes = require('./routes/tasks');
app.use('/tasks', taskRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});