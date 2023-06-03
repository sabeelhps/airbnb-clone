const app = require('./app');
const { connectDB, disconnectDB } = require('./database');
const logger = require('./core/logger');

(async () => {
    try {
        await connectDB();
        app.listen(8000, () => {
            logger.info('server started at port 8000');
        });
    } catch (err) {
        logger.error(err);
        disconnectDB();
    }
})();
