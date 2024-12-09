const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/User");
const blacklistTokenModel = require("../models/blacklistToken");
const captainModel = require("../models/Captain");

exports.authUser = async (req , res , next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];//HEADERS MEIN SPLIT KRNA HOTA HAI HRR BAAR
    if(!token) {
        return res.status(401).json({
            success : false,
            message : "Unauthorized"
        });
    }

    const isBlacklisted = await blacklistTokenModel.findOne({token : token});

    if(isBlacklisted) {
        return res.status(401).json({
            success : false,
            message : "Unauthorized"
        })
    }

    try {
        const decode = jwt.verify(token , process.env.JWT_SECRET);
        const user = await userModel.findById(decode._id);

        req.user = user;

        return next();
    }
    catch(error) {
        return res.status(401).json({
            success : false,
            message : "Unauthorized"
        })
    }
};

exports.authCaptain = async (req , res , next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];//HEADERS MEIN SPLIT KRNA HOTA HAI HRR BAAR
    if(!token) {
        return res.status(401).json({
            success : false,
            message : "Unauthorized"
        });
    }

    const isBlacklisted = await blacklistTokenModel.findOne({token : token});

    if(isBlacklisted) {
        return res.status(401).json({
            success : false,
            message : "Unauthorized"
        })
    }

    try {
        const decode = jwt.verify(token , process.env.JWT_SECRET);
        const captain = await captainModel.findById(decode._id);

        req.captain = captain;

        return next();
    }
    catch(error) {
        return res.status(401).json({
            success : false,
            message : "Unauthorized"
        })
    }
};