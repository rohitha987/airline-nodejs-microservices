const mongoose = require('mongoose');

const passengerSchema = new mongoose.Schema({
    name: String,
    age: Number,
    flight: { type: mongoose.Schema.Types.ObjectId, ref: 'Flight' },
});

module.exports = mongoose.model('Passenger', passengerSchema);
