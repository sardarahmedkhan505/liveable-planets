const express = require('express');
const { httpGetAllLaunches, httpAddNewLaunches, httpDeleteLaunch } = require('./Launch.controller');
const launchRouter = express.Router();

launchRouter.get('/launches', httpGetAllLaunches);
launchRouter.post('/launches', httpAddNewLaunches);
launchRouter.delete('/launches/:id', httpDeleteLaunch);
module.exports = {
    launchRouter,
};