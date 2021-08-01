// LOAD ENVIRONMENTAL VARIABLES
require("dotenv").config();

// import mongoose
const mongoose = require('mongoose')

//connection URI                                      CONNECTION
const mongoURI = process.env.MONGODBURI

/// configs
const config = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
}
// connect to URI
mongoose.connect(mongoURI, config)
// connect to the DB connection
const db = mongoose.connection
// additional connection messages
db.on('error', (err) => console.log(err.message + ' is mongod not running'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))

// EXPORT MONGOOSE CONNECTION TO USE IN SERVER.JS
module.exports = mongoose;