const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());



const policiaisRouter = require("./routes/policiais.Router");

app.use('/', policiaisRouter)

module.exports = app;