var connection = require('./../config');
const jwt = require("jsonwebtoken")
const md5 = require('md5')

const jwtKey = "VES_secret@gthjkio"
const jwtExpirySeconds = 259200 //86400 second for 1 day..Here it is set for 3 days


//sigin with logout checking
// const signIn = (req, res) => {
//   const { email, password } = req.body
//   connection.query('SELECT * FROM user WHERE email = ?', [email.toLowerCase()], (error, results) => {
//     if (error) {
//       console.log(error);
//       var err = {
//         status: false,
//         message: error.message,
//       };
//       return res.status(500).json(err);
//     }
//     else {
//       if (results.length > 0) {
//         console.log("Test found")

//         let sql = "SELECT * FROM user WHERE email = ? AND loginstatus = 1";
//         connection.query(sql, [email.toLowerCase()], (error, ch) => {
//           if (error) {
//             console.log(error);
//             var err = {
//               status: false,
//               message: error.message,
//             };
//             return res.status(500).json(err);
//           }
//           else {
//             if (ch.length > 0) {

//               console.log("Test + login status")
//               var data = {
//                 status: false,
//                 message: "Already login! Contact to Admin!",
//               };
//               return res.status(200).json(data);
//             }
//             else {
//               const token = jwt.sign({ email }, jwtKey, {
//                 algorithm: "HS256",
//                 expiresIn: jwtExpirySeconds,
//               })

//               console.log(token);
//               updateStatus(email);
//               console.log(results[0].id);
//               var data = {
//                 status: true,
//                 _token: token,
//                 uid: results[0].id,
//                 name: results[0].name,
//                 designation: results[0].designation,
//                 institute: results[0].institute,
//                 email: results[0].email,
//                 bio: results[0].bio,
//                 mobile: results[0].mobile,
//                 web: results[0].web,
//                 gender: results[0].gender,
//                 message: "Authenticated Successfully",
//               };
//               return res.status(200).json(data);
//             }
//           }
//         })
//       }
//       else {
//         var data = {
//           status: false,
//           message: "Email does not match",
//         };
//         return res.status(401).json(data);
//       }
//     }
//   })
// }


//sigin without logout checking
const signIn = (req, res) => {
  const { email, password } = req.body
  connection.query('SELECT * FROM user WHERE email = ?', [email.toLowerCase()], (error, results) => {
    if (error) {
      console.log(error);
      var err = {
        status: false,
        message: error.message,
      };
      return res.status(500).json(err);
    }
    else {
      if (results.length > 0) {
        console.log("Test found")
        const token = jwt.sign({ email }, jwtKey, {
          algorithm: "HS256",
          expiresIn: jwtExpirySeconds,
        })

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
          message: "Authenticated Successfully",
        };
        return res.status(200).json(data);

      }
      else {
        var data = {
          status: false,
          message: "Email does not match",
        };
        return res.status(401).json(data);
      }
    }
  })
}


function updateStatus(email) {
  let sql = "UPDATE user SET loginstatus = ? WHERE email = ?"
  connection.query(sql, [1, email], (error, result) => {
    if (error) {
      console.log(error.message)
    }
    else {
      console.log(result.affectedRows + " rows affected")
      console.log("updated")
    }
  })

}
const welcome = (req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"];
  if (!token) {
    var data = {
      status: false,
      message: "You need to login first...",
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
            message: "Login Again...",
          };
          return res.status(500).json(data);
        }
        var data = {
          status: false,
          message: "Login Again...",
        };
        return res.status(500).json(data);
      }
    }
  }
};

const logout = (req, res) => {
  const { email } = req.body
  console.log(req.body)

  console.log("Email val", email)
  let sql = "UPDATE user SET loginstatus = ? WHERE email = ?"
  connection.query(sql, [0, email], (error, result) => {
    if (error) {
      console.log(error.message)
      var err = {
        status: false,
        message: error.message
      }
      return res.status(500).json(err)
    }
    else {
      console.log(result.affectedRows + " rows affected")
      console.log("updated logout")
      const data = {
        status: true,
        message: "Logged out successfully!"
      }
      return res.status(200).json(data);
    }
  })
}

module.exports = {
  signIn,
  welcome,
  logout
}