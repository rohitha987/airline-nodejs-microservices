const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    flightNumber: String,
    airline: { type: mongoose.Schema.Types.ObjectId, ref: 'Airline' },
    origin: String,
    destination: String,
});

module.exports = mongoose.model('Flight', flightSchema);
