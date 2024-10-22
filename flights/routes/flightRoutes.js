const express = require('express');
const Flight = require('../models/Flight');
const axios = require('axios'); // For interservice communication
const router = express.Router();

// GET all flights
router.get('/', async (req, res) => {
    const flights = await Flight.find().populate('airline');
    res.json(flights);
});

// POST a new flight
router.post('/', async (req, res) => {
    const { airline } = req.body;

    // Validate airline existence
    try {
        await axios.get(`http://localhost:3001/airlines/${airline}`);
        const flight = new Flight(req.body);
        await flight.save();
        res.status(201).json(flight);
    } catch (error) {
        return res.status(404).json({ message: 'Airline not found' });
    }
});

module.exports = router;
