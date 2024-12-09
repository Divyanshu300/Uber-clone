const { validationResult } = require("express-validator");
const captainModel = require("../models/Captain");
const { createCaptain } = require("../services/captain.service");
const blacklistToken = require("../models/blacklistToken");


exports.registerCaptain = async(req , res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({
            success : false,
            errors : errors.array()
        })
    }

    const { fullname , email , password , vehicle } = req.body;

    const isCaptainAlreadyExists = await captainModel.findOne({email});
    
    if(isCaptainAlreadyExists) {
        return res.status(400).json({
            success : false,
            message : "User already exists"
        })
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await createCaptain({
        firstname : fullname.firstname,
        lastname : fullname.lastname,
        email,
        password : hashedPassword,
        color : vehicle.color,
        plate : vehicle.plate,
        capacity : vehicle.capacity,
        vehicleType : vehicle.vehicleType
    });

    const token = captain.generateAuthToken();

    res.status(201).json({
        success : true,
        message : "Captain created successfully",
        token,
        captain
    })
}; 

exports.loginCaptain = async(req , res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({
            errors : errors.array()//errors.array MEIN JO HMLOGO NE MSG DAALA THA VALIDATION KE TIME WOH SB AA JAYENGE
        });
    }

    const { email , password } = req.body;

    const captain = await captainModel.findOne({ email }).select("+password");
    if(!captain) {
        return res.status(401).json({
            success : false,
            message : "Invalid email or password"
        })
    }

    const isMatch = await captain.comparePassword(password);
    if(!isMatch) {
        return res.status(401).json({
            success : false,
            message : "Invalid email or password"
        });
    }

    const token = captain.generateAuthToken();

    res.cookie("token" , token);

    res.status(200).json({
        success : true,
        message : "Captain loggedIn successfully",
        token,
        captain
    })
};

exports.getCaptainProfile = (req , res) => {
    res.status(200).json({captain : req.captain});
};

exports.logoutCaptain = async(req , res) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];//HEADERS MEIN SPLIT KRNA HOTA HAI HRR BAAR
    
    await blacklistToken.create({token});
    
    res.clearCookie("token");
    
    res.status(200).json({
        success : true,
        message : "Captain loggeg out successfully"
    });
}