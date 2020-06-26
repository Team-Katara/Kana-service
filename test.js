/**
 * @jest-environment jsdom
 */


//server test
const app = require('./server/index.js');
const start = require('./server/index.js');
const close = require('./server/index.js');
const server = require('./server/index.js');
const request = require('supertest');

// beforeAll( () => {
//   server.start();
// });
// afterAll( () => {
//   server.close();
// });

//GET REQUEST should respond with Status 200
describe('GET request response', () => {
  test('GET request responds with status of 200', (done) => {
    request(app)
      .get('/')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      })
      .catch(err => console.log(err));
  });


  test('data retrieved from database returns an array', (done) => {
    request(app)
      .get('/api/similaritems')
      .then(done())
      .then(response => {
        expect(Array.isArray(response.body)).toBe(true);
      })
      .catch(err => done(err));
  });

});


//react enzyme tests (NOT WORKING)
//Enzyme setups

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from './client/App.jsx';

// describe('A suite', function() {
//   it('should render without throwing an error', function() {
//     expect(shallow(<App />).find('.similarItems').length).toEqual(1);
//   });

//   it('should be selectable by class "similarItems"', function() {
//     expect(shallow(<App />).is('.similarItems')).toBe(true);
//   });

//   it('should mount in a full DOM', function() {
//     expect(mount(<App />).find('.similarItems').length).toBe(1);
//   });

// });

it('renders without crashing', () => {
  shallow(<App />);
});