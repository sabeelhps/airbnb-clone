const express = require('express');

const router = express.Router();

router.get('/healthcheck', (req, res) => {
    console.log('Recieved Health Check!');
    res.send('Health check recieved');
});

router.get('/echo', (req, res) => {
    console.log('Recieved echo');
    res.send('Echo revieved');
});

module.exports = router;