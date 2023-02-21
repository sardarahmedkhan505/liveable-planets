const { planetRouter } = require('./routes/planets/planets.routes');
const { launchRouter } = require('./routes/Launch/Launch.route');
const morgan = require('morgan')
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(morgan('combined'));
app.use(express.json());
app.use(planetRouter); //we have to chain the requests with responses of routes.
app.use(launchRouter);
module.exports = app;