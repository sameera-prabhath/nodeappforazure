require('./config/config');  //config.js
require('./models/db'); //mongodb connection 
require('./config/passportConfig');


const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const port = process.env.PORT ||3000;

const rtsIndex = require('./routes/index.route');
const rtsPost = require('./routes/post.route');

const passport = require('passport');


var app = express();

var corsOptions = {
  credentials: true, origin: true
  // optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


//for angular dist
app.use('/', express.static(__dirname + '/dist/Angular9')); 


app.use(passport.initialize());
// app.use(passport.session());


app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/api', rtsIndex);
app.use('/api', rtsPost);

app.use((err, req, res, next) => {
  if (err.name === 'ValidationError') {
      var valErrors = [];
      Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
      res.status(422).send(valErrors)
  }
  else{
      console.log(err);
  }
});

//for angular dist
app.use('/*',function(req, res) {
  res.sendfile(__dirname + '/dist/Angular9/index.html');
});

app.listen(port, ()=>{
    console.log("server is running on port: "+port);
  }); 