"use strict";

var connection = require('./../config');

var jwt = require("jsonwebtoken");

var md5 = require('md5');

var jwtKey = "VES_secret@gthjkio";
var jwtExpirySeconds = 259200; //86400 second for 1 day..Here it is set for 3 days

var signIn = function signIn(req, res) {
  var email = req.body.email;
  connection.query('SELECT * FROM user WHERE email = ?', [email.toLowerCase()], function (error, results) {
    if (error) {
      console.log(error);
      var err = {
        status: false,
        message: error.message
      };
      return res.status(500).json(err);
    } else {
      if (results.length > 0) {
        console.log("Test found");
        var sql = "SELECT * FROM user WHERE email = ? AND loginstatus = 1";
        connection.query(sql, [email.toLowerCase()], function (error, ch) {
          if (error) {
            console.log(error);
            var err = {
              status: false,
              message: error.message
            };
            return res.status(500).json(err);
          } else {
            if (ch.length > 0) {
              console.log("Test + login status");
              var data = {
                status: false,
                message: "Already login! Contact to Admin!"
              };
              return res.status(200).json(data);
            } else {
              var token = jwt.sign({
                email: email
              }, jwtKey, {
                algorithm: "HS256",
                expiresIn: jwtExpirySeconds
              });
              console.log(token);
              updateStatus(email);
              console.log(results[0].id);
              var data = {
                status: true,
                _token: token,
                uid: results[0].id,
                name: results[0].name,
                designation: results[0].designation,
                institute: results[0].institute,
                email: results[0].email,
                bio: results[0].bio,
                mobile: results[0].mobile,
                web: results[0].web,
                gender: results[0].gender,
                message: "Authenticated Successfully"
              };
              return res.status(200).json(data);
            }
          }
        });
      } else {
        var data = {
          status: false,
          message: "Email does not match"
        };
        return res.status(401).json(data);
      }
    }
  });
};

function updateStatus(email) {
  var sql = "UPDATE user SET loginstatus = ? WHERE email = ?";
  connection.query(sql, [1, email], function (error, result) {
    if (error) {
      console.log(error.message);
    } else {
      console.log(result.affectedRows + " rows affected");
      console.log("updated");
    }
  });
}

var welcome = function welcome(req, res, next) {
  var token = req.headers["x-access-token"] || req.headers["authorization"];

  if (!token) {
    var data = {
      status: false,
      message: "You need to login first..."
    };
    return res.status(500).json(data);
  } else {
    if (token.startsWith("Bearer ")) {
      var payload;

      try {
        token = token.split(" ")[1];
        payload = jwt.verify(token, jwtKey);
        next();
      } catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
          var data = {
            status: false,
            message: "Login Again..."
          };
          return res.status(500).json(data);
        }

        var data = {
          status: false,
          message: "Login Again..."
        };
        return res.status(500).json(data);
      }
    }
  }
};

var logout = function logout(req, res) {
  var email = req.body.email;
  console.log(req.body);
  console.log("Email val", email);
  var sql = "UPDATE user SET loginstatus = ? WHERE email = ?";
  connection.query(sql, [0, email], function (error, result) {
    if (error) {
      console.log(error.message);
      var err = {
        status: false,
        message: error.message
      };
      return res.status(500).json(err);
    } else {
      console.log(result.affectedRows + " rows affected");
      console.log("updated logout");
      var data = {
        status: true,
        message: "Logged out successfully!"
      };
      return res.status(200).json(data);
    }
  });
};

module.exports = {
  signIn: signIn,
  welcome: welcome,
  logout: logout
};