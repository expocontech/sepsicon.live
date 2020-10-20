const format = require('dateformat')
const connection = require('../config.js')
const express = require('express')
const router = express.Router()


//List of past event
router.get('/past', (req, res) => {
    let sql = "SELECT * FROM event WHERE type = ?"
    connection.query(sql,[0], (error, events) => {
        if (error) {
            var err = {
                "status": false,
                "message": error.message
            }
            return res.status(500).json(err);
        }
        else {
            // if (events.length > 0) {

                for(var i=0;i<events.length;i++)
                {
                    events[i].image = "/images/event/"+events[i].image
                }

                var data = {
                    "status": true,
                    "message": "Past Events found",
                    "result": events
                };
                return res.status(200).json(data);
            // }
            // else {
            //     var data = {
            //         "status": false,
            //         "message": "Past Event Not found",
            //         "result": events
            //     };
            //     return res.status(400).json(data);
            // }
        }
    })
})

//List of upcoming event
router.get('/upcoming', (req, res) => {
    let sql = "SELECT * FROM event WHERE type = ?"
    connection.query(sql,[1], (error, events) => {
        if (error) {
            var err = {
                "status": false,
                "message": error.message
            }
            return res.status(500).json(err);
        }
        else {
            // if (events.length > 0) {
                for(var i=0;i<events.length;i++)
                {
                    events[i].image = "/images/event/"+events[i].image
                }


                var data = {
                    "status": true,
                    "message": "Upcoming Events found",
                    "result": events
                };
                return res.status(200).json(data);
            // }
            // else {
            //     var data = {
            //         "status": false,
            //         "message": "Upcoming Event Not found",
            //         "result": events
            //     };
            //     return res.status(400).json(data);
            // }
        }
    })
})

//Event modal data
router.get('/:eid', (req, res) => {
    eid = req.params.eid
    let sql = "SELECT id,title,date,youtube,detail FROM event WHERE id = ?" 
    connection.query(sql,[eid],(error, eventdetail) => {
        if (error) {
            var err = {
                "status": false,
                "message": error.message
            }
            return res.status(500).json(err);
        }
        else {
            // if (eventdetail.length > 0) {
                var data = {
                    "status": true,
                    "message": "Event Detail found",
                    "result": eventdetail
                };
                return res.status(200).json(data);
            // }
            // else {
            //     var data = {
            //         "status": false,
            //         "message": "Event Detail Not found",
            //         "result": eventdetail
            //     };
            //     return res.status(400).json(data);
            // }
        }
    })
})




module.exports = router