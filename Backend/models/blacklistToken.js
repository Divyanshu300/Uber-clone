const mongoose = require("mongoose");

const blacklistTokenSchema = new mongoose.Schema({//ISS SCHEMA MEIN JO BHI TOKEN CREATE HOGA WOH 24 HRS MEIN APNE AAP DELETE HO JAYEGA
    token : {
        type : String,
        required : true,
        unique : true,
    },
    createdAt : {
        type : Date,
        default : Date.now,
        expires : 86400,//  24 HOUS IN SECONDS
    },
})

module.exports = mongoose.model("BlacklistToken" , blacklistTokenSchema);
