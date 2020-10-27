# FEND Project #4: Evaluating News Articles With NLP
## Overview
**Evaluating News Articles with NLP** is the fourth project of Udacity [Front End Web Developer](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011) nanodegree program. It requires to build a web tool to run [Natural Language Processing](https://en.wikipedia.org/wiki/Natural_language_processing) on news articles or blog posts.

The goal of this project is to practice with:
* Setting up [Webpack](https://webpack.js.org/guides/getting-started/)
* [Sass styles](https://sass-lang.com/guide)
* Webpack loaders and plugins
* Creating layouts and page design
* Service workers
* Using APIs and creating requests to external URLs
* Using [Jest](https://jestjs.io/docs/en/getting-started)
## Features
* Based on URL entered by user, the app uses [AYLIEN Text Analysis API](https://docs.aylien.com/) to analyze article by four parameters:
  * Polarity
  * Subjectivity
  * Polarity confidence
  * Subjectivity confidence
* The regex-based URL validation is implemented.

![image](https://user-images.githubusercontent.com/53233637/97345745-af6f8c80-1847-11eb-8b95-71c64b22a204.png)
## Dependencies
Cool tech stuff used in this project:
* Node.js
* Express framework
* Node.js packages:
  * cors
  * body-parser
## Getting Started
### Prerequisites
1. Download Node.js from [here](https://nodejs.org/en/).
2. Install the dependencies using NPM.
```
npm install
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
### Running Tests
To run tests, from project directory run the following command:
```
npm run test
```
### Running in Development Mode
1. From project directory, run the following command:
```
npm run build-dev
```
2. Run run the server.
```
npm start
```
3. Access ```http://127.0.0.1:8080/``` in your browser.
### Running in Production Mode
To run the app in **production mode**:
1. Build the ```dist``` folder.
```
npm run build-prod
```
2. Start the server.
```
npm run start
```
3. Access ```http://127.0.0.1:8080/``` in your browser.

## Authors
Alexandra Baturina
