const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
const cors = require('cors');

// Allow CORS
app.use(cors());

// Log all 4xx and 5xx responses
app.use(morgan('dev'));

// Parse all requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve public folder
app.use(express.static(path.join(__dirname, '../public')));

module.exports = app;
