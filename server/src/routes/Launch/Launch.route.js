const express = require('express');
const { httpGetAllLaunches, httpAddNewLaunches } = require('./Launch.controller');
const launchRouter = express.Router();

launchRouter.get('/launches', httpGetAllLaunches);
launchRouter.post('/launches', httpAddNewLaunches);
module.exports = {
    launchRouter,
};