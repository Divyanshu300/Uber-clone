const express = require("express");
const { registerCaptain, loginCaptain, getCaptainProfile, logoutCaptain } = require("../controllers/Captain");
const router = express.Router();
const { body } = require("express-validator");
const { authCaptain } = require("../middlewares/auth.middleware");

router.post("/register" , [
        body("email").isEmail().withMessage("Invalid Email"),//YHAA PRR HMLOGO NE CHECK LAGA DIYA FOR VALIDATION AGAR ERRORS CHECK CONTROLLERS MEIN KRRENGE
        body("fullname.firstname").isLength({min : 3}).withMessage("First name must be atleast 3 characters long"),
        body("password").isLength({min : 6}).withMessage("Password must be atleast 6 characters long"),
        body("vehicle.color").isLength({min : 3}).withMessage("Password must be atleast 3 characters long"),
        body("vehicle.plate").isLength({min : 3}).withMessage("Password must be atleast 3 characters long"),
        body("vehicle.capacity").isLength({min : 1}).withMessage("Capacity must be atleast 1"),
        body("vehicle.vehicleType").isIn([ 'car' , 'motorcycle' , 'auto']).withMessage("Invalid vehicle type"),
    ],
    registerCaptain
);

router.post("/login" , [
        body("email").isEmail().withMessage("Invalid Email"),
        body("password").isLength({min : 6}).withMessage("Password must be atleast 6 characters long"),
    ],
    loginCaptain
);

router.get("/profile" , authCaptain , getCaptainProfile);

router.get("/logout" , authCaptain , logoutCaptain);



module.exports = router;