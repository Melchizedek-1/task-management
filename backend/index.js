require('dotenv').config({path: ".env"});
const express = require("express");
const connectDB = require('./config/db');
const cors = require('cors');

connectDB();

const app = express();

app.use(express.json({limit: '50mb'}));

app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));