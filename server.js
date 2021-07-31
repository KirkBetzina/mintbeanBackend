require('dotenv').config();
const mongoose = require('./db/connection');
const moorgan = require('morgan');
const cors = require('cors');
const express = require("express");
const app = express();
const PORT = process.env.PORT

///////////////////////////
// MIDDLEWARE 
///////////////////////////
const logger = require('morgan')
app.use(logger('dev'))
app.use(exprees.urlencoded({extended:false}))
app.use(express.json())

/////////////////////////////
// Add our Default rte
/////////////////////////////

app.get('/' , (req, res) => {
    res.json({
        status: 200,
        msg: 'hitting the default rte'
    });
})

/////////////////////////////////
// Import Your Controller
////////////////////////////////
const UserController = require('./users/controllers/user');
app.use('/user', UserController)

app.listen(PORT, () => {
    console.log(`listening in on port ${PORT}`)
})