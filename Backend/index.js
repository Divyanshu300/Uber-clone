const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser")

const connectToDb = require("./config/db");
connectToDb();

const userRoutes = require("./routes/User");
const captainRoutes = require("./routes/Captain");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser())

app.get("/" , (req , res) => {
    res.send("Hello World!");
})

app.use("/users" , userRoutes)
app.use("/captains" , captainRoutes)

module.exports = app;