const app = require('./app');
const { connectDB, disconnectDB } = require('./database');

(async() => {
    try {
        await connectDB();
        app.listen(process.env.PORT , () => {
            console.log('server started at port 8000');
        })
        
    }
    catch (err) {
        console.log(err);
        disconnectDB();
        
    
    }
})();

