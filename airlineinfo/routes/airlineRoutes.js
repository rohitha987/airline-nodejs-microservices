const express = require('express');
const Airline = require('../models/Airline');
const router = express.Router();

router.get('/', async (req, res) => {
    const airlines = await Airline.find();
    res.json(airlines);
});

router.post('/', async (req, res) => {
    const airline = new Airline(req.body);
    await airline.save();
    res.status(201).json(airline);
});

module.exports = router;
