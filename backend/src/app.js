const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());



// const authRoutes = require("./routes/authRoutes");

app.use('/', (req, res) => {
    res.send({message: 'API rondando'})
});

module.exports = app;