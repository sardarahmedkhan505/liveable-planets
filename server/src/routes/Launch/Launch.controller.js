const { getAllLaunches, addNewLaunch } = require('../../models/launch.model');

function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());
}
function httpAddNewLaunches(req, res) {
    const launch = req.body;
    launch.lauchDate = new Date(launch.lauchDate);
    addNewLaunch(launch);
    return res.status(201).json(launch);
}
module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunches,
}