const express = require("express");

const ScheduleController = require("../controller/schedule.controller");

const router = express.Router();

router.post("/schedule",ScheduleController.createScheduleController )


module.exports = router