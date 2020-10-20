const express = require('express');
const router = express.Router();
var connection = require('../config');

// List of sponsor
router.get('/', (req, res) => {
  let sql = 'SELECT * FROM sponsor';
  connection.query(sql, (error, sponsor) => {
    if (error) {
      let err = {
        status: false,
        message: error.message
      }
      return res.status(500).json(err);
    }
    else {
      for (var i = 0; i < sponsor.length; i++) {
        sponsor[i].logo = "/images/sponsor/logo/" + sponsor[i].logo
      }
      var data = {
        "status": true,
        "message": "sponsor found",
        "result": sponsor
      };
      return res.status(200).json(data);
    }
  })
})

// Sponsor detail
router.get('/detail/:sid', (req, res) => {
  let sid = req.params.sid
  let sql = 'SELECT * FROM sponsordetails WHERE id = ?';
  connection.query(sql, [sid], (error, sponsordetails) => {
    if (error) {
      let err = {
        status: false,
        message: error.message
      }
      return res.status(500).json(err);
    }
    else {
      // if (sponsordetails.length > 0) {

      for (var i = 0; i < sponsordetails.length; i++) {
        sponsordetails[i].logo = "/images/sponsor/logo/" + sponsordetails[i].logo,
          sponsordetails[i].banner = "/images/sponsor/details/" + sponsordetails[i].banner
      }

      var data = {
        "status": true,
        "message": "sponsor details found",
        "result": sponsordetails
      };
      return res.status(200).json(data);
    }
  })

})

// Sponsor doc
router.get('/doc/:sid', (req, res) => {
  let sid = req.params.sid
  let sql = 'SELECT * FROM sponsordoc WHERE sponsorid = ?';
  connection.query(sql, [sid], (error, sponsordoc) => {
    if (error) {
      let err = {
        status: false,
        message: error.message
      }
      return res.status(500).json(err);
    }
    else {
      var data = {
        "status": true,
        "message": "sponsor doc found",
        "result": sponsordoc
      };
      return res.status(200).json(data);
    }
  })

})


//get specific doc by specific sponsor
router.get('/doc-get', (req, res) => {
  const { docid } = req.query
  let sql = 'SELECT * FROM sponsordoc WHERE id = ?';
  connection.query(sql, [docid], (error, sponsordoc) => {
    if (error) {
      let err = {
        status: false,
        message: error.message
      }
      return res.status(500).json(err);
    }
    else {

      for (var i = 0; i < sponsordoc.length; i++) {
        sponsordoc[i].pdf = "/images/sponsor/doc/" + sponsordoc[i].pdf
        sponsordoc[i].img = "/images/sponsor/doc/" + sponsordoc[i].img
      }
      var data = {
        "status": true,
        "message": "sponsor doc found",
        "result": sponsordoc
      };
      return res.status(200).json(data);
    }
  })

})

// Sponsor staff
router.get('/staff/:sid', (req, res) => {
  let sid = req.params.sid
  let sql = 'SELECT * FROM sponsorstaff WHERE sponsorid = ?';
  connection.query(sql, [sid], (error, sponsorstaff) => {
    if (error) {
      let err = {
        status: false,
        message: error.message
      }
      return res.status(500).json(err);
    }
    else {
      // if (sponsorstaff.length > 0) {

      for (var i = 0; i < sponsorstaff.length; i++) {
        sponsorstaff[i].photo = "/images/sponsor/staff/" + sponsorstaff[i].photo
      }

      var data = {
        "status": true,
        "message": "sponsor staff found",
        "result": sponsorstaff
      };
      return res.status(200).json(data);
      // }
      // else {
      //     var data = {
      //         "status": true,
      //         "message": "sponsor staff Not found",
      //         "result": sponsorstaff
      //     };
      //     return res.status(200).json(data);
      // }
    }
  })

})
router.get('/setting/:id', (req, res) => {
  let sql = "select * from sponsor_setting where sponsorid = ?"
  connection.query(sql, [req.params.id], (error, setting) => {
    if (error) {
      let err = {
        status: false,
        message: error.message
      }
      return res.status(500).json(err);
    }
    else {
      if (setting.length > 0) {
        var data = {
          "status": true,
          "message": "sponsor setting found",
          "result": setting
        }
        return res.status(200).json(data);
      }
      else {
        var data = {
          "status": true,
          "message": "sponsor setting found",
          "result": [{
            banner: 1,
            about: 1,
            exhibitors: 1,
            doc: 1,
            videos: 1
          }]
        }
        return res.status(200).json(data);
      }
    }
  })
})


// Sponsor Videos
router.get('/video/:sid', (req, res) => {
  let sid = req.params.sid
  let sql = 'SELECT * FROM sponsorvideos WHERE sponsorid = ?';
  connection.query(sql, [sid], (error, sponsorvideo) => {
    if (error) {
      let err = {
        status: false,
        message: error.message
      }
      return res.status(500).json(err);
    }
    else {
      for (var i = 0; i < sponsorvideo.length; i++) {
        sponsorvideo[i].img = "/images/sponsor/video/" + sponsorvideo[i].img
      }

      var data = {
        "status": true,
        "message": "sponsor videos found",
        "result": sponsorvideo
      };
      return res.status(200).json(data);
    }
  })
})

// Sponsor Videos Modal
router.get('/vmodal/:vid', (req, res) => {
  let vid = req.params.vid
  let sql = 'SELECT * FROM sponsorvideos WHERE id = ?';
  connection.query(sql, [vid], (error, sponsorvideo) => {
    if (error) {
      let err = {
        status: false,
        message: error.message
      }
      return res.status(500).json(err);
    }
    else {
      for (var i = 0; i < sponsorvideo.length; i++) {
        sponsorvideo[i].img = "/images/sponsor/video/" + sponsorvideo[i].img
      }

      var data = {
        "status": true,
        "message": "sponsor videos Modal found",
        "result": sponsorvideo
      };
      return res.status(200).json(data);
    }
  })
})


//stall count by user
router.post('/stallcount', (req, res) => {
  const { sponsorid, userid } = req.body
  console.log(req.body)
  let sqlcheck = "select * from stallcount where userid=? and sponsorid=?";
  connection.query(sqlcheck, [userid, sponsorid], (error, result) => {
    if (error) {
      var err = {
        status: false,
        message: "Some error in query",
      }
      return res.status(500).json(err);
    }
    else {
      if (result.length > 0) {
        var data = {
          status: false,
          message: 'already counted'
        }
        return res.status(200).json(data);
      }
      else {

        let sql = "insert into stallcount(sponsorid,userid,datetime) values(?,?,CURRENT_TIMESTAMP)";
        connection.query(sql, [sponsorid, userid], (error, result) => {
          if (error) {
            var err1 = {
              status: false,
              message: 'some error in query'
            }
            return res.status(500).json(err1);
          }
          else {
            if (result.affectedRows > 0) {
              console.log("counted")
              var data = {
                status: true,
                message: 'counted and inserted successfully',
                result: result.affectedRows + 'row affected'
              }
              return res.status(200).json(data);
            }
            else {
              var data = {
                status: false,
                message: 'not inserted & counted',
                result: result.affectedRows + 'row affected'
              }
              return res.status(400).json(data);
            }
          }
        })
      }
    }
  })
})

//sponsor doc count by user
router.post('/doc-count', (req, res) => {
  const { sponsorid, userid, docid } = req.body
  let sqlcheck = "select * from sponsordoccount where userid=? and sponsorid=? and docid = ?";
  connection.query(sqlcheck, [userid, sponsorid, docid], (error, result) => {
    if (error) {
      var err = {
        status: false,
        message: "Some error in query",
      }
      return res.status(500).json(err);
    }
    else {
      if (result.length > 0) {
        var data = {
          status: false,
          message: 'already counted'
        }
        return res.status(200).json(data);
      }
      else {

        let sql = "insert into sponsordoccount(sponsorid,userid,docid,datetime) values(?,?,?,CURRENT_TIMESTAMP)";
        connection.query(sql, [sponsorid, userid, docid], (error, result) => {
          if (error) {
            var err1 = {
              status: false,
              message: 'some error in query'
            }
            return res.status(500).json(err1);
          }
          else {
            if (result.affectedRows > 0) {
              console.log("counted")
              var data = {
                status: true,
                message: 'counted and inserted successfully',
                result: result.affectedRows + 'row affected'
              }
              return res.status(200).json(data);
            }
            else {
              var data = {
                status: false,
                message: 'not inserted & counted',
                result: result.affectedRows + 'row affected'
              }
              return res.status(400).json(data);
            }
          }
        })
      }
    }
  })
})


//sponsor video count by user
router.post('/video-count', (req, res) => {
  const { sponsorid, userid, videoid } = req.body
  let sqlcheck = "select * from sponsorvideocount where userid=? and sponsorid=? and videoid = ?";
  connection.query(sqlcheck, [userid, sponsorid, videoid], (error, result) => {
    if (error) {
      var err = {
        status: false,
        message: "Some error in query",
      }
      return res.status(500).json(err);
    }
    else {
      if (result.length > 0) {
        var data = {
          status: false,
          message: 'already counted'
        }
        return res.status(200).json(data);
      }
      else {

        let sql = "insert into sponsorvideocount(sponsorid,userid,videoid,datetime) values(?,?,?,CURRENT_TIMESTAMP)";
        connection.query(sql, [sponsorid, userid, videoid], (error, result) => {
          if (error) {
            var err1 = {
              status: false,
              message: 'some error in query'
            }
            return res.status(500).json(err1);
          }
          else {
            if (result.affectedRows > 0) {
              console.log("counted")
              var data = {
                status: true,
                message: 'counted and inserted successfully',
                result: result.affectedRows + 'row affected'
              }
              return res.status(200).json(data);
            }
            else {
              var data = {
                status: false,
                message: 'not inserted & counted',
                result: result.affectedRows + 'row affected'
              }
              return res.status(400).json(data);
            }
          }
        })
      }
    }
  })
})

//sponsor doc count by user
router.post('/staff-count', (req, res) => {
  const { sponsorid, userid, staffid } = req.body
  let sqlcheck = "select * from sponsorstaffcount where userid=? and sponsorid=? and staffid = ?";
  connection.query(sqlcheck, [userid, sponsorid, staffid], (error, result) => {
    if (error) {
      var err = {
        status: false,
        message: "Some error in query",
      }
      return res.status(500).json(err);
    }
    else {
      if (result.length > 0) {
        var data = {
          status: false,
          message: 'already counted'
        }
        return res.status(200).json(data);
      }
      else {

        let sql = "insert into sponsorstaffcount(sponsorid,userid,staffid,datetime) values(?,?,?,CURRENT_TIMESTAMP)";
        connection.query(sql, [sponsorid, userid, staffid], (error, result) => {
          if (error) {
            var err1 = {
              status: false,
              message: 'some error in query'
            }
            return res.status(500).json(err1);
          }
          else {
            if (result.affectedRows > 0) {
              console.log("counted")
              var data = {
                status: true,
                message: 'counted and inserted successfully',
                result: result.affectedRows + 'row affected'
              }
              return res.status(200).json(data);
            }
            else {
              var data = {
                status: false,
                message: 'not inserted & counted',
                result: result.affectedRows + 'row affected'
              }
              return res.status(400).json(data);
            }
          }
        })
      }
    }
  })
})


router.get('/demo', (req, res) => {
  // console.log(req.query)
  const { sponsorid, uid } = req.query

  let sql1 = "select * from request_demo where uid = ? and sponsorid = ?"
  connection.query(sql1, [uid, sponsorid], (error, resp) => {
    if (error) {
      let err = {
        status: false,
        message: error.message
      }
      return res.status(500).json(err)
    }
    else {
      if (!resp.length > 0) {
        let sql = "insert into request_demo(uid, sponsorid, datetime) values(?,?,CURRENT_TIMESTAMP)";
        connection.query(sql, [uid, sponsorid], (error, result) => {
          if (error) {
            let err = {
              status: false,
              message: error.message
            }
            return res.status(500).json(err)
          }
          else {
            var data = {
              status: true,
              message: 'Our Team will get back to you!'
            }
            return res.status(200).json(data)
          }
        })
      }
      else {
        var data = {
          status: true,
          message: 'You already submitted demo request'
        }
        return res.status(200).json(data)
      }
    }
  })


})
module.exports = router