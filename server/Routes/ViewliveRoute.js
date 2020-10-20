const express = require('express');
const router = express.Router();
var connection = require('../config');
var format = require('dateformat');
//Get livelink
router.get('/', (req, res) => {
    let sql = "select * from livelink";
    connection.query(sql, (error, links) => {
        if (error) {
            var err = {
                "status": false,
                "message": error.message
            };
            return res.status(500).json(err);
        }
        else {
            for (var i = 0; i < links.length; i++) {
                links[i].livebanner = "/images/liveview/" + links[i].livebanner
                links[i].backbanner = "/images/liveview/" + links[i].backbanner
            }
            var data = {
                "status": true,
                "message": "Link found",
                "result": links
            };
            return res.status(200).json(data);
        }
    })
})

//get attendee list
router.get('/attendee/:id', (req, res) => {
    let sql = "select u.* from viewlivecount v, user u where v.hallid = ? AND u.id=v.userid";
    connection.query(sql, [req.params.id], (error, attendee) => {
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
                "message": "Attendee found",
                "result": attendee
            };
            return res.status(200).json(data);
        }
    })
})

//Footer Banner
router.get('/footer', (req, res) => {
    let sql = "select * from eventsetting";
    connection.query(sql, (error, footer) => {
        if (error) {
            var err = {
                "status": false,
                "message": error.message
            };
            return res.status(500).json(err);
        }
        else {
            // if (footer.length > 0) {

            for (var i = 0; i < footer.length; i++) {
                footer[i].footerbanner = "/images/home/" + footer[i].footerbanner
            }

            var data = {
                "status": true,
                "message": "Footer banner found",
                "result": footer
            };
            return res.status(200).json(data);
        }
    })
})


//Add Questions
router.post('/askquestion', (req, res) => {
    const { uidval, questionval, hallid } = req.body;
    sql = "INSERT INTO questions(uid,hallid,question,datetime) values(?,?,?,CURRENT_TIMESTAMP)"
    connection.query(sql, [uidval, hallid, questionval], (error, questions) => {
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
                "message": questions.affectedRows + ' Question inserted'
            };
            return res.status(200).json(data);
        }
    })
})

//Get the question list
router.get('/getlist', (req, res) => {
    let sql = "SELECT u.name,q.question,q.datetime,q.hallid,u.email FROM user u,questions q WHERE u.id = q.uid ORDER By q.datetime Desc";
    connection.query(sql, (error, questionlist) => {
        if (error) {
            var err = {
                "status": false,
                "message": error.message
            }
            return res.status(500).json(err);
        }
        else {
            var data = {
                "status": true,
                "message": "Questions found",
                "result": questionlist
            };
            return res.status(200).json(data);
        }
    })
})


//View live hall visit count by user
router.post('/hallcount', (req, res) => {
    const { hallid, userid } = req.body
    let sqlcheck = "select * from viewlivecount where userid=? and hallid=?";
    connection.query(sqlcheck, [userid, hallid], (error, result) => {
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

                let sql = "insert into viewlivecount(hallid,userid,datetime) values(?,?,CURRENT_TIMESTAMP)";
                connection.query(sql, [hallid, userid], (error, result) => {
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

module.exports = router;