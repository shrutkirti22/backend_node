var express = require('express');
var app = express();

// define routes here..

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});


app.get("/",function(req,res){
console.log("hi");
res.send("hello ");
}) 

var itemRoutes = express.Router();
const dataPath = './data/dummy.json';
const fs = require('fs');
const cors = require('cors');

app.use(cors())

app.get('/getInfo', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      // console.log(JSON.parse(data));
      res.send(JSON.parse(data));
    });
  });

app.get('/isPersonRegistered', (req, res) => {
console.log(req.body);
  var _ = require("underscore");
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }

    var users = JSON.parse(data);

    var filtered = _.where(users, {name: "Sasha"});
    // if (_.some(listOne) && _.some(objectOne)) 
    console.log(filtered);

    res.send(filtered);
  });

})

  


// let sendApp = require('./routes.js'); 
// ssendApp(app);
 