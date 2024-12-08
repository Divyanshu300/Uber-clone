const mongoose = require("mongoose");


function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT ).then(() => { 
        console.log("Connected To DB");
    })
    .catch((error) => {
        console.log(error)
    }) 
}

module.exports = connectToDb;