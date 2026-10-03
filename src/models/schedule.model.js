const mongoose = require("mongoose");

const scheduleShcema  = mongoose.Schema({

    date:{
        type:String,
        required: [true,"Date is required"]
    },
    time:{
         type:String,
        required: [true,"time is required"]

    },
    name:{
         type:String,
        required: [true,"Name is required"]
    },
    email:{
         type:String,
        required: [true,"Email is required"],
        lowercase:true,
        trim:true,
         match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please provide a valid email address"
        ],
    },
    phone:{
         type:String,
        required: [true, "Phone is required"],
        minlength:[10, "Number must be atleast ten characters"]
    },
    occupants:{
         type:String,
        required: [true, "Occupants is required"]
    },
    occupation:{
         type:String,
        required: [true, "Ocuupation is required"]
    },
    income:{
         type:String,
        required: [true, "Income is required"]
    },
    moveInDate:{
         type:String,
        required: [true, "Move in date is required"]
    },
    message:{
         type:String,
        required: [true, "Message is required"]
    }



})

const scheduleModel = mongoose.model("schedule",scheduleShcema)


module.exports = scheduleModel