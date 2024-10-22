const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/passengerRoute');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/passengerDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/passengers', routes);

app.listen(3003, () => {
    console.log('Passenger Info Service running on port 3003');
});
