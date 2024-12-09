const { validationResult } = require("express-validator");
const captainModel = require("../models/Captain");
const { createCaptain } = require("../services/captain.service");


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
}