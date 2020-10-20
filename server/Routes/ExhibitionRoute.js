const express = require('express');
const router = express.Router();
var connection = require('../config');

//scientific lobby - get lobby
router.get('/get-lobby', (req, res) => {
    let sql = "SELECT * FROM `exhibition_lobby` WHERE isactive = 1"
    connection.query(sql, (error, lobby) => {
        if (error) {
            var err = {
                "status": false,
                "message": error.message
            };
            return res.status(500).json(err);
        }
        else {
            for (var i = 0; i < lobby.length; i++) {
                lobby[i].image = "/images/exhibition/lobbyhall/" + lobby[i].image
            }
            var data = {
                "status": true,
                "message": "Exhibition Lobby found",
                "result": lobby
            };
            return res.status(200).json(data);
        }
    })
})


// List of stall(sponsor) by exhibition hall id
router.get('/get-stall/:id', (req, res) => {
    let sql = 'SELECT * FROM `exhibition_hall_sponsor` WHERE ex_hallid = ?';
    connection.query(sql, [req.params.id], (error, stall) => {
        if (error) {
            let err = {
                status: false,
                message: error.message
            }
            return res.status(500).json(err);
        }
        else {
            for (var i = 0; i < stall.length; i++) {
                stall[i].image = "/images/sponsor/logo/" + stall[i].image
            }
            var data = {
                "status": true,
                "message": "Stall found",
                "result": stall
            };
            return res.status(200).json(data);
        }
    })
})
module.exports = router