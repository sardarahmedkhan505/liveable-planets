const { launches } = require('../../models/launch.model');
function getAllLaunches(req, res) {
    console.log("These are launches", launches.values());
    return res.status(200).json(Array.from(launches.values()));
    // return res.status(200).json("Hello World");
}

module.exports = {
    getAllLaunches,
}