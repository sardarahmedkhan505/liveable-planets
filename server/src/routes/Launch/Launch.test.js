const request = require('supertest');
const app = require('../../app');

describe("test to check", () => {
    test('should return the 200 status code', async () => {
        const response = await request(app).get('/launches');
        expect(response.statusCode).toBe(200);
    }
    )
})
describe("It should check the post request", () => {
    const postData = {
        mission: "Uss Enterstallar",
        rocket: "NCC 1701",
        target: "kepler-16 f",
        launchDate: "January 4, 2031",
    }
    const postDataWithoutDate = {
        mission: "Uss Enterstallar",
        rocket: "NCC 1701",
        target: "kepler-16 f",
    }

    test("Should return the Post properties", async () => {
        const response = await request(app).post('/launches').send(postData)
            .expect('Content-Type', /json/)
            .expect(201);
        const requestDate = new Date(postData.launchDate).valueOf();
        const responseDate = new Date(response.body.launchDate).valueOf();
        expect(responseDate).toBe(requestDate);
        expect(response.body).toMatchObject(postDataWithoutDate);
    })
})