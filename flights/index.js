const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/flightRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/flightsDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/flights', routes);

app.listen(3002, () => {
    console.log('Flights Service running on port 3002');
});
