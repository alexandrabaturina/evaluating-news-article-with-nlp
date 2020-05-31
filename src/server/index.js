const path = require('path');
const express = require('express');
const PORT = 8081;

// Env variable for protecting API key
const dotenv = require('dotenv');
dotenv.config();

const AYLIENTextAPI = require("aylien_textapi");
const textapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

// Require Express to run server and routes
const app = express()

/* Middleware*/
// Configure Express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Start up an instance of app
app.use(express.static('dist'))

// Designate what port to listen for requests
app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}`)
})

// API call
app.post('/api', function (req, res) {
    // Get text to analyze
    textapi.classify({
        'url': req.body.urlToAnalyze
    }, function (error, textToAnalyze) {
        if (error === null) {
            // Sentiment analysis
            textapi.sentiment({
                'text': textToAnalyze.text
            }, function (error, analysisResult) {
                if (error === null) {
                    res.send(analysisResult)
                }
            })
        }
    });
});

app.get('/', function (req, res) {
    res.sendFile(path.resolve('index.html'))
})