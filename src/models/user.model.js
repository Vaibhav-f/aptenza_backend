const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")


const userSchema  =new mongoose.Schema({ 

    email:{
        type: String,
        required: [true , "User email is required"],
        trim: true,
        lowercase: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please provide a valid email address"
        ],
        unique: [true ,"Email already exists"]
    },

    name:{
        type: String,
        required: [true ,"Name is required"]
    },
    
    password: {
        type:String,
        required: [ true , "Password required"],
        minlength:[6 , "Password should be contain at least 6 character"],
        select: false,
    },
    phone: {
        type:String,
        required:[true , "Phone is required"],
        minlength:[10 ,"Number should be contain at least 10 character"]
    }
},{
    timestamps: true
})

userSchema.pre("save",async function(next) {
    if(!this.isModified("password")){
        return 
    }
    
  const hash = await bcrypt.hash(this.password, 5)
  this.password = hash
  return 
})

userSchema.methods.comparePassword = async function (password) {

    return await bcrypt.compare(password ,this.password)
    
}


const userModel = mongoose.model("user", userSchema)

module.exports = userModel 