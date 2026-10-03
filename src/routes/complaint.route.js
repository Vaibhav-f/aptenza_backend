const express = require("express");
const complaintController = require("../controller/complaint.controller");


const router = express.Router();

router.post("/complaint" , complaintController.complaintController);


module.exports= router ; 
