// 1. Import all dependencies
const express = require("express")
const app = express()
// const mongoose = require('mongoose')

//2.1 configure mongoose
require("./configs/mongoose.config")

// 2.2 config express
app.use(express.json())
app.use(express.urlencoded({extended: true})) //Extended

// 3. routes & logic
require("./routes/jokes.routes")(app)

// 4. listen to the port
app.listen(8000, () => console.log("Listening to the port 8000"))