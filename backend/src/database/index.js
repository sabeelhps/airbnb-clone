const mongoose = require('mongoose');
const logger = require('../core/logger');

const disconnectDB = async () => {
    await mongoose.disconnect();
};

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/airbnb-clone');
        logger.info('DB Connection Open!');
    } catch (err) {
        logger.error(err);
        disconnectDB();
    }
};

module.exports = {
    disconnectDB,
    connectDB,
};
