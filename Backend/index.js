const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");

const connectToDb = require("./config/db");
connectToDb();

const userRoutes = require("./routes/User");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/" , (req , res) => {
    res.send("Hello World!");
})

app.use("/user" , userRoutes)

module.exports = app;