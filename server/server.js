const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const fs = require('fs');
const https = require('https');
//const http = require('http');
const path = require('path');
const fileUpload = require('express-fileupload');
const connection = require('./config.js')
const converter = require('json-2-csv')
// modules
const config = require('./config');
const { signIn, welcome, logout } = require('./middleware/Auth');

//Routes Import
const registerRoute = require('./Routes/RegisterRoute');
const viewliveRoute = require('./Routes/ViewliveRoute');
const eventsettingRoute = require('./Routes/EventSettingRoute');
const eventRoute = require('./Routes/EventRoute')
const eposterRoute = require('./Routes/EposterRoute')
const programmeRoute = require('./Routes/ProgrammeRoute')
const downloadRoute = require('./Routes/DownloadRoute')
const facultyRoute = require('./Routes/FacultyRoute')
const sponsorRoute = require('./Routes/SponsorRoute')
const homeRoute = require('./Routes/HomeRoute')
const feedbackRoute = require('./Routes/FeedbackRoute')
const settingRoute = require('./Routes/SettingRoute')
const forgotRoute = require('./Routes/ForgotRoute')
const pollRoute = require('./Routes/PollRoute')
const scientificRoute = require('./Routes/ScientificRoute')
const home_lobbyRoute = require('./Routes/HomeLobbyRoute')
const exhibitionRoute = require('./Routes/ExhibitionRoute')
const logoutRoute = require('./Routes/LogoutRoute')

const port = process.env.PORT || 8028;

//certificate
 const privateKey = fs.readFileSync('./security/private.pem', 'utf8');
 const certificate = fs.readFileSync('./security/cert.pem', 'utf8');
 const ca = fs.readFileSync('./security/chain.pem', 'utf8');

 const credentials = {
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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('./public'));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



// Common Routes
app.get('/echo', (req, res) => {
  res.send({ 'message': "echo" })
})

//Register
app.use('/signup', registerRoute);

//Sign In
app.post('/auth/signin', signIn)


//Forgot password
app.use('/forgot', forgotRoute);

//livelink
app.use('/viewlive', welcome, viewliveRoute);

//livelink
app.use('/eventsetting', eventsettingRoute);

//Past Event
app.use('/event', welcome, eventRoute);

//Eposter Route
app.use('/eposter', welcome, eposterRoute);

//Programme Route
app.use('/programme', welcome, programmeRoute);

//Download Route
app.use('/download', welcome, downloadRoute);

//Faculty Route
app.use('/faculty', welcome, facultyRoute);

//Sponsor Route
app.use('/sponsor', welcome, sponsorRoute);

//Home Banner Route
app.use('/home', welcome, homeRoute);

//Feedback Route
app.use('/feedback', welcome, feedbackRoute);

//Setting Route
app.use('/setting', welcome, settingRoute);

//Setting Route
app.use('/poll', welcome, pollRoute);

//Scientific Route
app.use('/scientific', welcome, scientificRoute);

//Exhibition Route
app.use('/exhibition', welcome, exhibitionRoute);

//Scientific Route
app.use('/home-lobby', welcome, home_lobbyRoute);

app.use('/logout', logoutRoute)

app.use('/delegate', async (req, res) => {
  let sql = "select * from user";
  await connection.query(sql, async (error, attendee) => {
    if (error) {
      var err = {
        "status": false,
        "message": error.message
      };
      return res.status(500).json(err);
    }
    else {
      if (attendee.length > 0) {
        var data = {
          "status": true,
          "message": "Attendee found",
          "result": attendee
        };
        return res.status(200).json(data);
      }
      else {
        var data = {
          "status": true,
          "message": "Attendee Not found",
        };
        return res.status(400).json(data);
      }
    }
  })
})


app.get('/testemail', (req, res) => {
  res.sendFile(path.join(__dirname, '/Routes/emailindex.html'))
})

// Starting both http & https servers
//const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

//httpServer.listen(port, () => {
// console.log(`HTTP Server running on port ${port}`);
//});

 httpsServer.listen(port, () => {
  	console.log('HTTPS Server running on port 8028');
  });

