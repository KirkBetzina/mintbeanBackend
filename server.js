require('dotenv').config();
const mongoose = require('./users/db/connections.js');
const morgan = require('morgan');
const cors = require('cors');
const express = require("express");
const app = express();
const PORT = process.env.PORT

///////////////////////////
// MIDDLEWARE 
///////////////////////////
const logger = require('morgan')
app.use(logger('dev'))
app.use(express.urlencoded({extended:false}))
app.use(cors()); // <----- add cors headers
app.use(express.json()); // <---- parses JSON bodies and adds them to req.body
app.use(morgan("tiny")); // <----- logging for debugging


///////////////////////////
// Add our Default rte
///////////////////////////

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