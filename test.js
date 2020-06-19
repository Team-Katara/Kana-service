//db tests
//before or after running the test, clear the database to avoid duplicates


//server test
const app = require('./server/index.js');
const request = require('supertest');

//GET REQUEST should respond with hello world
describe('GET request response', () => {
  test('GET request responds with status of 200', (done) => {
    request(app)
      .get('/')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
