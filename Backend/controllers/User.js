const userModel = require("../models/User");
const userService = require("../services/user.service");
const {validationResult} = require("express-validator");

exports.registerUser = async(req , res , next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors : errors.array()//errors.array MEIN JO HMLOGO NE MSG DAALA THA VALIDATION KE TIME WOH SB AA JAYENGE
        });
    }

    const { fullname , email , password } = req.body;

    const hashedPassword = await userModel.hashPassword(password);//YE METHOD HMLOGO NEIN USER SCHEMA MEIN BNAAYA THA USKO CALL KIYA HAI

    const user = await userService.createUser({//YE METHOD HMLOGO NEIN USER SCHEMA MEIN BNAAYA THA USKO CALL KIYA HAI
        firstname : fullname.firstname,
        lastname : fullname.lastname ,
        email,
        password : hashedPassword
    });

    const token = user.generateAuthToken();

    res.status(201).json({
        success : true,
        message : "User created successfully",
        token : token,
        user : user
    });
};

exports.loginUser = async(req , res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors : errors.array()
        })
    }

    const { email , password } = req.body;

    const user = await userModel.findOne({ email }).select("+password");// {+password} ISLIYE BCOZ HMLOGO NE SCHEMA MEIN SELECT FALSE RAKHA HAI TOH USER FATCH KRTE TIME PASSWORD NHI AATA
    if(!user) {
        return res.status(401).json({
            success : false,
            message : "Invalid email or password"
        })
    }

    const isMatch = await user.comparePassword(password);
    if(!isMatch) {
        return res.status(401).json({
            message : "Invalid email or password"        
        })
    }
    
    const token = user.generateAuthToken();
    
    res.status(200).json({
        token,
        user
    })
    
};

