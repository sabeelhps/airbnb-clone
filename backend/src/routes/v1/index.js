const express = require('express');
const authRoutes = require('./authRoutes');

const router = express.Router();

// add routes here
router.use('/auth', authRoutes);


module.exports = router;
