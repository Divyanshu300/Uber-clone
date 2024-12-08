const express = require("express");
const router = express.Router();
const {body , validationResult} = require("express-validator");
const { registerUser, loginUser } = require("../controllers/User");


router.post("/register" , [
        body("email").isEmail().withMessage("Invalid Email"),//YHAA PRR HMLOGO NE CHECK LAGA DIYA FOR VALIDATION AGAR ERRORS CHECK CONTROLLERS MEIN KRRENGE
        body("fullname.firstname").isLength({min : 3}).withMessage("First name must be atleast 3 characters long"),
        body("password").isLength({min : 6}).withMessage("Password must be atleast 6 characters long"),
    ],
    registerUser
);

router.post("/login" , [
        body("email").isEmail().withMessage("Invalid Email"),
        body("password").isLength({min : 6}).withMessage("Password must be atleast 6 characters long"),
    ],
    loginUser
)


module.exports = router;