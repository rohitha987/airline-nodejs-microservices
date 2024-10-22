const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/airlineRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/airlineDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/airlines', routes);

app.listen(3001, () => {
    console.log('Airline Info Service running on port 3001');
});
