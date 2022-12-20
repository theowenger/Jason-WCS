const express = require('express');
const mongoose = require('mongoose');
const argonaute = require('./models/argonaute');
require('dotenv').config();
const helmet = require("helmet");

const argonauteRoute = require('./routes/argonaute')

const app = express();
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.use(express.json())

app.use((req, res, next) => {

  mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then((db) => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

  next();
})

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com");
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  next();
})

app.use('/api/argonaute', argonauteRoute);

module.exports = app;