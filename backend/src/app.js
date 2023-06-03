const express = require('express');
const healthcheckRoutes = require('./routes/healthCheck');

const app = express();


app.use(healthcheckRoutes);





module.exports = app;