const express = require('express');
const logger = require('../core/logger');

const router = express.Router();

router.get('/healthcheck', (req, res) => {
    logger.info('Recieved Health Check!');
    res.send('Health check recieved');
});

router.get('/echo', (req, res) => {
    logger.info('Recieved echo');
    res.send('Echo revieved');
});

module.exports = router;
