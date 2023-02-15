
const launches = new Map();

const Launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('Febraury 14, 2050'),
    customer: ['ZTM', 'NASA'],
    destination: 'Kepler-442 b',
    upcoming: true,
}
launches.set(Launch.flightNumber, Launch);

module.exports = {
    launches,
}