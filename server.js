require('dotenv').config();
const mongoose = require('./db/connection');
const moorgan = require('morgan');
const cors = require('cors')
const express = require("express");
const app = express();
const PORT = process.env.PORT
