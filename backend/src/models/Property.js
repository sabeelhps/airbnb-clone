const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    locationName: {
        type: String
    },
    hostDesc: {
        type: String
    },
    availableDates: {
        type: string
    },
    price: {
        type: Number,
        min: 1
    }
});

const Property = new mongoose.model('Property', propertySchema);

module.exports = Property;