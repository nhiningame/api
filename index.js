mkdir api
touch api/index.js

const express = require('express');
const app = express();

app.get('/api/gemini', (req, res) => {
  res.json({ message: 'Hello from Gemini API' });
});

module.exports = app;
