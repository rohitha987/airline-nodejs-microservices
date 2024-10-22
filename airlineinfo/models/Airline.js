const mongoose = require('mongoose');

const airlineSchema = new mongoose.Schema({
    name: String,
    code: String,
    country: String,
});

module.exports = mongoose.model('Airline', airlineSchema);
