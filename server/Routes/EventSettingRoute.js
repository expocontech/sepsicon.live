const express = require('express');
const router = express.Router();
var connection = require('../config');


//Global 
router.get('/', (req, res) => {
    let sql = "select * from eventsetting";
    connection.query(sql, (error, eventsetting) => {
        if (error) {
            var err = {
                "status": false,
                "message": error.message
            };
            return res.status(500).json(err);
        }
        else {
            if (eventsetting.length > 0) {

                var data = {
                    "status": true,
                    "message": "Event setting found",
                    "logo" : "/images/home/"+eventsetting[0].logo,
                    "titlelong" : eventsetting[0].titlelong,
                    "titleshort" : eventsetting[0].titleshort,
                    "weburl" : eventsetting[0].weburl,
                    "support" : eventsetting[0].support,
                    "registertext" : eventsetting[0].registertext,
                    "logintext" : eventsetting[0].logintext,
                    "csvbutton": eventsetting[0].csvbutton,
                    "pollbutton": eventsetting[0].pollbutton,
                    "attendeebutton":eventsetting[0].attendeebutton,
                    "qbutton": eventsetting[0].qbutton,
                    "agendabutton":eventsetting[0].agendabutton,
                    "gtmwbutton":eventsetting[0].gtmwbutton,
                    "footertab":eventsetting[0].footertab,
                    "middletitle":eventsetting[0].middletitle,

                };
                return res.status(200).json(data);
            }
            else {
                var data = {
                    "status": true,
                    "message": "Event settings Not found",
                };
                return res.status(200).json(data);
            }
        }
    })
})

//Get State list
router.get('/state', (req, res) => {
    let sql = "select * from state"
    connection.query(sql, (error, state) => {
        if (error) {
            var err = {
                "status": false,
                "message": error.message,
                "flag": 0,
                "result": []
            }
            return res.status(500).json(err);
        }
        else {
            if (state.length > 0) {
                var data = {
                    "status": true,
                    "message": "State data found",
                    "flag": 1,
                    "result": state
                };
                return res.status(200).json(data);
            }
            else {
                var data = {
                    "status": true,
                    "message": "State not found",
                    "flag": 0,
                    "result": state
                };
                return res.status(200).json(data);
            }
        }
    })
})

module.exports = router