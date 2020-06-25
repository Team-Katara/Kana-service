const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const Guitar = require('../database/Model.js');

app.use (express.static('./dist'));

app.get ('/api/similaritems', (req, res) => {
  Guitar.find( (err, data) => {
    if (err) {
      console.log ('error finding similar items data');
    } else {
      res.json(data);
    }
  });
});


let server;
const start = () => (server = app.listen (port, function() {
  console.log(`listening on port ${port}`);
})
);

start();

const close = server ? server.close : () => {};


module.exports = app;
module.exports.start = start;
module.exports.close = close;
