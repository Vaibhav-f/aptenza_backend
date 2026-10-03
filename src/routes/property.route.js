const express = require("express");
const propertyController = require("../controller/property.controller");



const router = express.Router();

router.post("/propertyList" , propertyController.createPropertyController);


module.exports= router ;  