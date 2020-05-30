const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const dotenv = require('dotenv');
dotenv.config();

const AYLIENTextAPI = require("aylien_textapi");
const textapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const PORT = 8081;

// Require Express to run server and routes
const app = express()

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Start up an instance of app
app.use(express.static('dist'))

// console.log(__dirname)

// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}`)
})

app.get('/test', function (req, res) {
    res.send({ text: "hi" })
})

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})



