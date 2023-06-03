const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    locationName: {
        type: String
    },
    hostDesc: {
        type: String,
<<<<<<< HEAD
        trim:true
=======
        trim: true
>>>>>>> master
    },
    availableDates: {
        type: String,
        trim:true
    },
    price: {
        type: Number,
        min: 0
    }
});

const Property = new mongoose.model('Property', propertySchema);

module.exports = Property;