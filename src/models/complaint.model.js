const mongoose = require("mongoose");

const complaintSchema = mongoose.Schema({

    name:{
        type: String,
        required: true

    },

    email:{
        type:String,
         required: [true , "User email is required"],
        trim: true,
        lowercase: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please provide a valid email address"
        ],
       
    },

    phone:{
        type:String,
        minlength:[10,"number should be contain atleast 10 charaters"],
        required:[true, "number is required"]
    },

    apartment:{
        type:String,
        required:[true , "Apartment number is required"]
    },

    category:{
        type:String,
        required: true,
    },

    priority:{
        type: String,
        required: true
    },

    subject:{ 
        type:String,
        required:[true,"Subject must be provided"]
    },

    description:{
        type:String,
        required:[true , "Issue must be described"]
    }
})


const complaintModel = mongoose.model("complaint" , complaintSchema)

module.exports = complaintModel