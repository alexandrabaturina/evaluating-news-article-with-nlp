# FEND Project #4: Evaluating News Articles With NLP
## Overview
**Evaluating News Articles with NLP** is the fourth project of Udacity [Front End Web Developer](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) nanodegree program. It requires to build a web tool to run [Natural Language Processing](https://en.wikipedia.org/wiki/Natural_language_processing) on news articles or blog posts.

The goal of this project is to practice with:
* Setting up [Webpack](https://webpack.js.org/guides/getting-started/)
* [Sass styles](https://sass-lang.com/guide)
* Webpack loaders and plugins
* Creating layouts and page design
* Service workers
* Using APIs and creating requests to external urls
* Using [Jest](https://jestjs.io/docs/en/getting-started)
## Features
* Based on URL entered by user, the app uses [AYLIEN Text Analysis API](https://docs.aylien.com/) to analyze article by four parameters:
  * Polarity
  * Subjectivity
  * Polarity confidence
  * Subjectivity confidence
* The regex-based URL validation is implemented.
## Getting Started
### Prerequisites
1. Download Node.js from [here](https://nodejs.org/en/).
2. Install the following packages using NPM.
```sh
npm install express
npm install cors
npm install body-parser
```
3. Get AYLIEN Text Analysis API key [here](https://developer.aylien.com/signup).
4. Clone this repo.
5. ``cd`` into project directory.
6. Create ```.env``` file in the root of the project.
7. Fill the ```.env``` file with your API keys.
```sh
API_ID=ENTER_YOUR_ID_HERE
API_KEY=ENTER_YOUR_KEY_HERE
```
### Running
To run the app locally, ```cd``` into project directory.
To run tests, use the following command:
```
npm run test
```
To run the app in **development mode**, use the following command:
```
npm run build-dev
```
To run the app in **production mode**:
1. Build the ```dist``` folder.
```
npm run build-prod
```
2. Start the server.
```
npm run start
```
3. Open ```localhost:8081``` in your browser.

## Authors
Alexandra Baturina
