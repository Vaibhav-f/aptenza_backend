const express = require("express");
const cookieParser = require("cookie-parser")
const cors = require("cors")

const authRouter = require("./routes/auth.route")
const complaintRouter = require("./routes/complaint.route")
const propertyRouter = require("./routes/property.route")
const scheduleRouter = require("./routes/schedule.route")
const app = express();

app.use(express.json())
app.use(cookieParser())
app.use(cors()) 

app.use("/api/auth", authRouter)
app.use("/complaint" , complaintRouter)
app.use("/property",propertyRouter)
app.use("/apply",scheduleRouter)
 
module.exports = app