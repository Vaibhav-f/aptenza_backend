const complaintModel = require("../models/complaint.model");

async function complaintController(req,res){

    const {name , email , phone , apartment , category , priority , subject  ,description} = req.body ;


    const complaint =await complaintModel.create({

        name , email , phone , apartment , category , priority , subject  , description
    })
    res.status(201).json({
        message: "Complaint created successfully",
        complaint: complaint
    });
}

module.exports = {
    complaintController
} 