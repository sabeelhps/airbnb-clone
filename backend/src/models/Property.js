const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    locationName: {
        type: String
    },
    hostDesc: {
        type: String
    },
    availableDates: {
        type: String
    },
    price: {
        type: Number,
        min: 0
    }
});

const Property = new mongoose.model('Property', propertySchema);

module.exports = Property;