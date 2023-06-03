const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    locationName: {
        type: String,
    },
    hostDesc: {
        type: String,
        trim: true,
    },
    availableDates: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
        min: 0,
    },
});

const Property = new mongoose.model('Property', propertySchema);

module.exports = Property;
