const express = require('express');
const { getAllLaunches } = require('./Launch.controller');
const launchRouter = express.Router();

launchRouter.get('/launches', getAllLaunches);
module.exports = {
    launchRouter,
};