const scheduleModel = require("../models/schedule.model");

async function createScheduleController(req,res){

    const{date,time,name , email , phone , occupants , occupation , income, moveInDate , message} = req.body;

    const schedule =await scheduleModel.create({
       date,time, name , email , phone , occupants , occupation , income, moveInDate , message
    })

    res.status(201).json({
        message:"Your apointment is scheduled for apartment visit",
        schedule:schedule
    })
}

module.exports = {
    createScheduleController
}