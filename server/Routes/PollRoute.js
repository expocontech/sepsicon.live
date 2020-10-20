const express = require('express');
const router = express.Router();
var connection = require('../config');

router.get('/question/:id', (req, res) => {
    connection.query('SELECT * FROM pollquestion WHERE hallid = ? AND isactive = ?', [req.params.id, 1], (error, pollquestion) => {
        // connection.query('SELECT * FROM pollquestion WHERE isactive = ?', [1], (error, pollquestion) => {
        if (error) {
            var err = {
                "status": false,
                "message": error.message
            };
            return res.status(500).json(err);
        }
        else {
            var data = {
                "status": true,
                "message": "pollquestion found",
                "result": pollquestion
            };
            return res.status(200).json(data);
        }
    })
})

//Add Results
router.post('/result', (req, res) => {
    const { obj, hallid, uid } = req.body
    let checkSql = "SELECT * FROM `pollresult` WHERE `hallid` = ? AND `uid` = ? "
    connection.query(checkSql, [hallid, uid], (error, results) => {
        if (error) {
            console.log(error.message)
            var err = {
                "status": false,
                "message": error.message
            };
            return res.status(500).json(err);
        }
        else {
            if (results.length > 0) {
                console.log("Poll already submitted")
                var data = {
                    "status": true,
                    "message": "Poll Already Submitted"
                };
                return res.status(200).json(data);
            }
            else {
                var sql = "INSERT INTO pollresult(hallid,uid,qid,answer,datetime) VALUES ?";
                let dt = Date.now()
                connection.query(sql, [obj.map(item => [item.hallid, item.uid, item.qid, item.ans, dt])], (error, results) => {
                    if (error) {
                        console.log(error.message)
                        var err = {
                            "status": false,
                            "message": error.message
                        };
                        return res.status(500).json(err);
                    }
                    else {
                        console.log("Inserted rows", results.affectedRows)
                        var data = {
                            "status": true,
                            "message": "Poll Submitted"
                        };
                        return res.status(200).json(data);
                    }
                })
            }
        }
    })
})

module.exports = router;