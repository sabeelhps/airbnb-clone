const app = require('./app');
const { connectDB, disconnectDB } = require('./database');

(async() => {
    try {
        await connectDB();
        app.listen(process.env.PORT , () => {
            console.log('server started at port 8000');
        })
        // git
    }
    catch (err) {
        console.log(err);
        disconnectDB();
        // disconnect Db
        //eewer
        //asddsd
    }
})();

