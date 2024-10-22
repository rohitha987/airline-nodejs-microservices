const express = require('express');
const Passenger = require('./models/Passenger');
const router = express.Router();

router.get('/', async (req, res) => {
    const passengers = await Passenger.find().populate('flight');
    res.json(passengers);
});

router.post('/', async (req, res) => {
    const passenger = new Passenger(req.body);
    await passenger.save();
    res.status(201).json(passenger);
});

module.exports = router;
