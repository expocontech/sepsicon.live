const express = require('express');
const router = express.Router();
var connection = require('../config');

//home lobby - get scinetific
router.get('/get-scientific', (req, res) => {
    let sql = "SELECT * FROM `home_scientific` WHERE isactive = 1"
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
                lobby[i].image = "/images/home_lobby/home_scientific/" + lobby[i].image
            }
            var data = {
                "status": true,
                "message": "Scientific Lobby found",
                "result": lobby
            };
            return res.status(200).json(data);
        }
    })
})

//Home lobby - get sponsor stall
router.get('/get-sponsor', (req, res) => {
    let sql = "SELECT * FROM `home_sponsor` WHERE isactive = 1"
    connection.query(sql, (error, sponsor) => {
        if (error) {
            var err = {
                "status": false,
                "message": error.message
            };
            return res.status(500).json(err);
        }
        else {
            for (var i = 0; i < sponsor.length; i++) {
                sponsor[i].image = "/images/home_lobby/home_sponsor/" + sponsor[i].image
            }
            var data = {
                "status": true,
                "message": "Sponsor Stall found",
                "result": sponsor
            };
            return res.status(200).json(data);
        }
    })
})

module.exports = router