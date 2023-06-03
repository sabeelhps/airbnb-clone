const mongoose = require('mongoose');


const disconnectDB = async() => {
    await mongoose.disconnect();
}

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/airbnb-clone');
        console.log('DB Connection Open!');
    }
    catch (err) {
        console.log(err);
        disconnectDB();
    }
}

module.exports = {
    disconnectDB,
    connectDB
}

