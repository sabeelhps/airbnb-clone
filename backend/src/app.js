const express = require('express');
const healthcheckRoutes = require('./routes/healthCheck');
const v1Routes = require('./routes/v1');
const cors = require('cors');

const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(cors());

app.use(healthcheckRoutes);
app.use('/api/v1', v1Routes);

module.exports = app;
