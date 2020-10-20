"use strict";

var express = require('express');

var app = express();

var cors = require("cors");

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

var session = require('express-session');

var fs = require('fs');

var https = require('https');

var http = require('http');

var path = require('path');

var fileUpload = require('express-fileupload');

var connection = require('./config.js');

var converter = require('json-2-csv'); // modules


var config = require('./config');

var _require = require('./middleware/Auth'),
    signIn = _require.signIn,
    welcome = _require.welcome,
    logout = _require.logout; //Routes Import


var registerRoute = require('./Routes/RegisterRoute');

var viewliveRoute = require('./Routes/ViewliveRoute');

var eventsettingRoute = require('./Routes/EventSettingRoute');

var eventRoute = require('./Routes/EventRoute');

var eposterRoute = require('./Routes/EposterRoute');

var programmeRoute = require('./Routes/ProgrammeRoute');

var downloadRoute = require('./Routes/DownloadRoute');

var facultyRoute = require('./Routes/FacultyRoute');

var sponsorRoute = require('./Routes/SponsorRoute');

var homeRoute = require('./Routes/HomeRoute');

var feedbackRoute = require('./Routes/FeedbackRoute');

var settingRoute = require('./Routes/SettingRoute');

var forgotRoute = require('./Routes/ForgotRoute');

var pollRoute = require('./Routes/PollRoute');

var scientificRoute = require('./Routes/ScientificRoute');

var home_lobbyRoute = require('./Routes/HomeLobbyRoute');

var exhibitionRoute = require('./Routes/ExhibitionRoute');

var logoutRoute = require('./Routes/LogoutRoute');

var port = process.env.PORT || 8000; //certificate

var privateKey = fs.readFileSync('./security/private.pem', 'utf8');
var certificate = fs.readFileSync('./security/cert.pem', 'utf8');
var ca = fs.readFileSync('./security/chain.pem', 'utf8');
var credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca
};
app.use(fileUpload());
app.use(cookieParser());
app.use(session({
  secret: "Shh, its a secret!",
  saveUninitialized: true,
  resave: true
}));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.use(express["static"]('./public'));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); // Common Routes

app.get('/echo', function (req, res) {
  res.send({
    'message': "echo"
  });
}); //Register

app.use('/signup', registerRoute); //Sign In

app.post('/auth/signin', signIn); //Forgot password

app.use('/forgot', forgotRoute); //livelink

app.use('/viewlive', welcome, viewliveRoute); //livelink

app.use('/eventsetting', eventsettingRoute); //Past Event

app.use('/event', welcome, eventRoute); //Eposter Route

app.use('/eposter', welcome, eposterRoute); //Programme Route

app.use('/programme', welcome, programmeRoute); //Download Route

app.use('/download', welcome, downloadRoute); //Faculty Route

app.use('/faculty', welcome, facultyRoute); //Sponsor Route

app.use('/sponsor', welcome, sponsorRoute); //Home Banner Route

app.use('/home', welcome, homeRoute); //Feedback Route

app.use('/feedback', welcome, feedbackRoute); //Setting Route

app.use('/setting', welcome, settingRoute); //Setting Route

app.use('/poll', welcome, pollRoute); //Scientific Route

app.use('/scientific', welcome, scientificRoute); //Exhibition Route

app.use('/exhibition', welcome, exhibitionRoute); //Scientific Route

app.use('/home-lobby', welcome, home_lobbyRoute);
app.use('/logout', logoutRoute);
app.use('/delegate', function _callee2(req, res) {
  var sql;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          sql = "select * from user";
          _context2.next = 3;
          return regeneratorRuntime.awrap(connection.query(sql, function _callee(error, attendee) {
            var err, data;
            return regeneratorRuntime.async(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!error) {
                      _context.next = 5;
                      break;
                    }

                    err = {
                      "status": false,
                      "message": error.message
                    };
                    return _context.abrupt("return", res.status(500).json(err));

                  case 5:
                    if (!(attendee.length > 0)) {
                      _context.next = 10;
                      break;
                    }

                    data = {
                      "status": true,
                      "message": "Attendee found",
                      "result": attendee
                    };
                    return _context.abrupt("return", res.status(200).json(data));

                  case 10:
                    data = {
                      "status": true,
                      "message": "Attendee Not found"
                    };
                    return _context.abrupt("return", res.status(400).json(data));

                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            });
          }));

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
});
app.get('/testemail', function (req, res) {
  res.sendFile(path.join(__dirname, '/Routes/emailindex.html'));
}); // Starting both http & https servers

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
httpServer.listen(port, function () {
  console.log("HTTP Server running on port ".concat(port));
}); // httpsServer.listen(8000, () => {
// 	console.log('HTTPS Server running on port 8000');
// });