'use strict';

const express = require('express');
const cors = require('cors');
// const firebaseAdmin = require('firebase-admin');
// const serviceAccount = require('./private-stuff/nimjay-starter-project-eaa5f55fd0fe.json');

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, _, next) => {
  console.log(`Just got a request at: ${req.url}`);
  next();
});

// Serve the static front-end files.
app.use(express.static(__dirname + '/front-end-build'));

// TODO: Implement every back-end endpoint as a POST for simplicity.
// app.post('/back-end/get-my-daily-surveys', handleGetMyDailySurveys);
// app.post('/back-end/create-daily-survey', handleCreateDailySurvey);
// app.post('/back-end/update-daily-survey', handleUpdateDailySurvey);

// Send index.html for front-end pages.
const sendIndexDotHtml = (_, res) => { res.sendFile(__dirname + '/front-end-build/index.html'); };
app.get('/about', sendIndexDotHtml);
app.get('/some-other-page/:myVariable', sendIndexDotHtml);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`The Life Guide Node.js server is now running on port ${PORT}.`);
  // firebaseAdmin.initializeApp({
  //   credential: firebaseAdmin.credential.cert(serviceAccount)
  // });
});

module.exports = app;
