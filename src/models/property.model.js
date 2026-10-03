const mongoose = require("mongoose");

const propertySchema = mongoose.Schema({

    propertyTitle: {
        type:String,
        required : [true , "Title is reequired"]
    },

    propertyType:{
        type:String,
        required: [true , "Property type is required"]
    },

    address:{
        type:String,
        required: [true ,"Address is required"]
    },

    
    city:{
        type:String,
        required:[true, "City is required"]
    },

    state:{
         type:String,
        required:[true, "State is required"]

    },

    zipCode:{
         type:String,
        required:[true, "Zipcode is required"]
    },

    monthlyRent:{
         type:String,
        required:[true, "Rent is required"]
    },

    securityDeposit:{
         type:String,
        required:[true, "Deposite is required"]
    },

    availableFrom:{
         type:String,
        required:[true, "Availability is required"]
    },
    bedrooms:{
         type:String,
        required:[true, "Bedrooms is required"]
    },
    bathrooms:{
         type:String,
        required:[true, "Bathrooms is required"]
    },
    area:{
         type:String,
        required:[true, "Apartment area is required"]
    },
    floor:{
         type:String,
        required:[true, "Floor is required"]
    },
    parking:{
         type:String,
        required:[true, "Parking is required"]
    },
    petAllowed:{
         type:String,
        required:[true, "Pet allowed is required"]
    },
    furnished:{
         type:String,
        required:[true, "Furnished is required"]
    },
    balcony:{
         type:String,
        required:[true, "Balcony is required"]
    },
    airConditioning:{
         type:String,
        required:[true, "Air Conditioner is required"]
    },
    laundry:{
         type:String,
        required:[true, "Laundary is required"]
    },
    elevator:{
         type:String,
        required:[true, "Elevator is required"]
    },
    utilitiesIncluded:{
         type:String,
        required:[true, "Utility bills are required"]
    },
    description:{
         type:String,
        required:[true, "Description is required"]
    },
    ownerName:{
         type:String,
        required:[true, "Name is required"]
    },
    ownerEmail:{
         type:String,
        required:[true, "Email is required"],
         trim: true,
        lowercase: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please provide a valid email address"
        ],
       
    },
    ownerPhone:{
         type:String,
        required:[true, "Phone is required"],
        minlength:[10, "Number should be contain atleast 10 characters"]
    }


})

const propertyModel = mongoose.model("property",propertySchema)

module.exports= propertyModel 