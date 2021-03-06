const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = 3002;
const Guitar = require('../database/Model.js');

app.use (express.static(__dirname + '/../dist'));
app.use(cors());

//return data by groupID
app.get ('/api/similaritems', (req, res) => {
  console.log(req.query.id);
  var group = req.query.id;
  Guitar.find({Group: `${group}`}, (err, data) => {
    if (err) {
      console.log ('error finding similar items data');
    } else {
      res.json(data[0].SimilarItems);
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
