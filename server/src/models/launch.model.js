
const launches = new Map();
let latestFlightNumber = 100;
const Launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('Febraury 14, 2050'),
    target: 'Kepler-442 b',
    customer: ['Ahmed', 'NASA'],
    upcoming: true,
    success: true
}
launches.set(Launch.flightNumber, Launch);


function isLaunchExist(launchId) {
    return launches.has(launchId);
}

function getAllLaunches() {
    return Array.from(launches.values());
}
function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(latestFlightNumber, Object.assign(launch, {
        flightNumber: latestFlightNumber,
        customer: ['Ahmed', 'NASA'],
        upcoming: true,
        success: true
    }));
}
function deleteById(launchId) {
    const deleted = launches.get(launchId);
    deleted.upcoming = false;
    deleted.success = false;
    return deleted;
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
    isLaunchExist,
    deleteById
}