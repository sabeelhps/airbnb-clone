const express = require('express');
const healthcheckRoutes = require('./routes/healthCheck');
const v1Routes = require('./routes/v1');

const app = express();

app.use(healthcheckRoutes);
app.use('/api/v1', v1Routes);

module.exports = app;
