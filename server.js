const dns = require("dns");
dns.setServers(["8.8.8.8"]);
require("dotenv").config()
const app = require("./src/app");
const connectToDB  = require("./src/config/db")



connectToDB()


app.listen(5000, () => {
    console.log("Server running on port 5000");
});