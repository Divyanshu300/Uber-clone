const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({
    fullname : {
        firstname : {
            type : String,
            required : true,
            minlength : [3 , "First name must be 3 characters long"]
        },
        lastname : {
            type : String,
            minlength : [3 , "Last name must be 3 characters long"]
        },
    },
    email : {
        type : String,
        required : true,
        unique : true,
        minlength : [5 , "Email must be 5 characters long"]
    },
    password : {
        type : String,
        required : true,
        select : false,//YE USE KRNE SE JB BHI HMM USER FIND KRENGE TOH USER DETAILS MEIN PASSWORD NHI JAYEGA
    },
    socketId : {
        type : String,
    }

});

userSchema.methods.generateAuthToken = function () { // Use a regular function becoz arrow funtion this. ko bind nhi krr pata
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET , {expiresIn : "24h"});
    return token;
};


userSchema.methods.comparePassword = async function (password) {//ARROW FUNCTION this. WAALI PROPERTY BIND NHI KRTA HAI SO USE NORMAL FUNCTION
    return await bcrypt.compare(password, this.password);
};


userSchema.statics.hashPassword = async(password) => {
    return await bcrypt.hash(password , 10);
};

const userModel = mongoose.model("user" , userSchema);

module.exports = userModel;
