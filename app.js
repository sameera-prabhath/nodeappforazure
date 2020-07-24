require('./config/config');  //config.js
require('./models/db'); //mongodb connection 
require('./config/passportConfig');


const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const port = process.env.PORT || 3000;

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
app.use(bodyParser.json({ limit: '50MB' } ));
app.use('/api', rtsIndex);
app.use('/api', rtsPost);

app.use((err, req, res, next) => {
  if (err.name === 'ValidationError') {
    var valErrors = [];
    Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
    res.status(422).send(valErrors)
  }
  else {
    console.log(err);
  }
});

//for angular dist
app.use('/*', function (req, res) {
  res.sendfile(__dirname + '/dist/Angular9/index.html');
});

var server = app.listen(port, () => {
  console.log("server is running on port: " + port);
});


var chatusers = [];
//socket.io , for chat app
var io = require('socket.io').listen(server );
io.on('connection', (socket) => {
  console.log("new connnection made..." + socket.id)

//new
  socket.on('bigin', (data) => {    
    chatusers[data.user] = socket.id;
    io.in(socket.id).emit('new msg', { user: "YOU", message: data.user });
  })


  //new
  socket.on('sendpmsg', (data) => {  

  var soid =   chatusers[data.user] 

    io.to(soid).to(socket.id).emit('new msg', { user:"rayan", message: data.message });

 
  })


  socket.on('join', (data) => {
    socket.join(data.room)
    console.log(data.user + " join to room   " + data.room)
    socket.broadcast.to(data.room).emit('new user join', { user: data.user, message: 'has joined this room.' });
  })



  socket.on('leave', (data) => {

    console.log(data.user + " left the room   " + data.room)
    socket.broadcast.to(data.room).emit('user left', { user: data.user, message: 'has left this room.' });
    socket.leave(data.room)
  })


  socket.on('msg', (data) => {

    io.in(data.room).emit('new msg', { user: data.user, message: data.message });
  })


})