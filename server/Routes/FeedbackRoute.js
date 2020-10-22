const express = require('express');
const router = express.Router();
var connection = require('../config');

// router.post('/',(req,res)=>{
//     let sql = "INSERT INTO feedback(uid,feedback,datetime) values(?,?,CURRENT_TIMESTAMP)";
//     const {uidval,feedbackval,datetime} = req.body
//     connection.query(sql,[uidval,feedbackval],(error,feedback)=>{
//         if(error)
//         {
//             var err = {
//                 "status": false,
//                 "message": error.message
//             };
//             return res.status(500).json(err);
//         }
//         else{
//             var data = {
//                 "status": true,
//                 "message": feedback.affectedRows + ' Feedback inserted'
//             };
//             return res.status(200).json(data);
//         }
//     })
// })

router.get('/question', (req, res) => {
  connection.query('SELECT * FROM fbquestion WHERE isactive = ?', [1], (error, fbquestion) => {
    if (error) {
      var err = {
        "status": false,
        "message": error.message
      };
      return res.status(500).json(err);
    }
    else {
      if (fbquestion.length > 0) {
        var data = {
          "status": true,
          "message": "fbquestion found",
          "result": fbquestion
        };
        return res.status(200).json(data);
      }
      else {
        var data = {
          "status": true,
          "message": "fbquestion Not found",
        };
        return res.status(400).json(data);
      }
    }
  })
})


//Add Results
router.post('/result', (req, res) => {

  const { uidval, q1, q2, q3, q4, q5, name } = req.body
  console.log(req.body)

  sql = `INSERT INTO feedback(uid,q1,q2,q3,q4,q5,username) values(?,?,?,?,?,?,?)`
        connection.query(sql, [uidval, q1, q2, q3, q4, q5, name], (error, op) => {
          if (error) {
            var err = {
              "status": false,
              "message": error.message
            };
            return res.status(500).json(err);
          }
          else {
            console.log("result inserted");
            var data = {
              "status": true,
              "message": op.affectedRows + ' Result inserted'
            };
            return res.status(200).json(data);
          }
        })

  // let sql1 = "select * from feedback1 where uid = ?"
  // connection.query(sql1, [uidval], (error, result) => {
  //   if (error) {
  //     console.log(error)
  //     var err = {
  //       "status": false,
  //       "message": error.message
  //     };
  //     return res.status(500).json(err);
  //   }
  //   else {
  //     if (result.affectedRows != 0) {
  //       console.log("result inserted");
  //       console.log("feedback avaialable")
  //       var data = {
  //         "status": true,
  //         "message": 'Result inserted'
  //       };
  //       return res.status(200).json(data);
  //     }
  //     else {
  //       sql = `INSERT INTO feedback1(uid,question1,question2,question3,question4,question5,question6) values(?,?,?,?,?,?,?)`
  //       connection.query(sql, [uidval, q1, q2, q3, q4, q5, name], (error, op) => {
  //         if (error) {
  //           var err = {
  //             "status": false,
  //             "message": error.message
  //           };
  //           return res.status(500).json(err);
  //         }
  //         else {
  //           console.log("result inserted");
  //           var data = {
  //             "status": true,
  //             "message": op.affectedRows + ' Result inserted'
  //           };
  //           return res.status(200).json(data);
  //         }
  //       })
  //     }
  //   }
  // })


})

module.exports = router