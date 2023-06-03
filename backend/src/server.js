const app = require('./app');
const { connectDB, disconnectDB } = require('./database');

(async() => {
    try {
        await connectDB();
        app.listen(8000, () => {
            console.log('server started at port 8000');
        })
    }
    catch (err) {
        console.log(err);
        disconnectDB();
    }
})();

