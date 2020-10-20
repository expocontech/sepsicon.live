const express = require('express');
const router = express.Router();
var connection = require('../config');
//Get Home Banner
router.get('/banner', (req, res) => {
    let sql = "select * from homebanner";
    connection.query(sql, (error, homebanner) => {
        if (error) {
            var err = {
                "status": false,
                "message": error.message
            };
            return res.status(500).json(err);
        }
        else {
            if (homebanner.length > 0) {

                for (var i = 0; i < homebanner.length; i++) {
                    homebanner[i].image = "/images/home/" + homebanner[i].image
                }

                var data = {
                    "status": true,
                    "message": "Home Banner found",
                    "result": homebanner
                };
                return res.status(200).json(data);
            }
            else {
                var data = {
                    "status": true,
                    "message": "Home Banner Not found",
                };
                return res.status(200).json(data);
            }
        }
    })
})


//Get Welcome Message
router.get('/message', (req, res) => {
    let sql = "select * from homemessage";
    connection.query(sql, (error, homemessage) => {
        if (error) {
            var err = {
                "status": false,
                "message": error.message
            };
            return res.status(500).json(err);
        }
        else {
            if (homemessage.length > 0) {

                var data = {
                    "status": true,
                    "message": "Home Message found",
                    "result": homemessage
                };
                return res.status(200).json(data);
            }
            else {
                var data = {
                    "status": true,
                    "message": "Home message Not found",
                };
                return res.status(200).json(data);
            }
        }
    })
})

//Get Committee Type
router.get('/comtype', (req, res) => {
    let sql = "select * from committeetype WHERE isactive = ?";
    connection.query(sql, [1], (error, comtype) => {
        if (error) {
            var err = {
                "status": false,
                "message": error.message
            };
            return res.status(500).json(err);
        }
        else {
            if (comtype.length > 0) {

                var data = {
                    "status": true,
                    "message": "Committee type found",
                    "result": comtype
                };
                return res.status(200).json(data);
            }
            else {
                var data = {
                    "status": true,
                    "message": "Committee type Not found",
                    "result": comtype
                };
                return res.status(200).json(data);
            }
        }
    })
})

router.get('/committee', (req, res) => {
    let sql = "select c.* from committee c,committeetype ct WHERE ct.isactive = ? AND c.type = ct.id";
    connection.query(sql,[1], (error, committee) => {
        if (error) {
            var err = {
                "status": false,
                "message": error.message
            };
            return res.status(500).json(err);
        }
        else {
            // if (committee.length > 0) {
                for (var i = 0; i < committee.length; i++) {
                    committee[i].img = "/images/committee/" + committee[i].img
                }
                var data = {
                    "status": true,
                    "message": "Committee found",
                    "result": committee
                };
                return res.status(200).json(data);
            // }
            // else {
            //     var data = {
            //         "status": true,
            //         "message": "Committee Not found",
            //         "result": committee
            //     };
            //     return res.status(400).json(data);
            // }
        }
    })
})

router.get('/icon', (req, res) => {
    let sql = "select * from homeicons where isactive=1";
    connection.query(sql, (error, icon) => {
        if (error) {
            var err = {
                "status": false,
                "message": error.message
            };
            return res.status(500).json(err);
        }
        else {
            // if (icon.length > 0) {
                
                var data = {
                    "status": true,
                    "message": "icon found",
                    "result": icon
                };
                return res.status(200).json(data);
            // }
            // else {
            //     var data = {
            //         "status": false,
            //         "message": "icon Not found",
            //         "result": icon
            //     };
            //     return res.status(400).json(data);
            // }
        }
    })
})

module.exports = router