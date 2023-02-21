const { getAllLaunches, addNewLaunch } = require('../../models/launch.model');

function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());
}
function httpAddNewLaunches(req, res) {
    const launch = req.body;
    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
        return res.status(400).json({
            error: "The entered launch properties are missing or wrongly entered"
        })
    }
    launch.launchDate = new Date(launch.launchDate);
    if (launch.launchDate.toString() === 'Invalid Date') {
        return res.status(400).json({
            error: "The entered date or its format is not allowed"
        })
    }
    addNewLaunch(launch);
    return res.status(201).json(launch);
}
module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunches,
}