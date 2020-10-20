const express = require('express');
const router = express.Router();
var connection = require('../config');

//scientific lobby - get lobby
router.get('/get-lobby', (req, res) => {
    let sql = "SELECT * FROM `scientific_lobby` WHERE isactive = 1"
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
                lobby[i].image = "/images/scientific/lobbyhall/" + lobby[i].image
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

//get banner and link
router.get('/get-banner/:id', (req, res) => {
    const hallid = req.params.id
    // console.log("hallid", hallid)
    let sql = "SELECT * FROM `scientific_lobby` WHERE isactive = 1 AND hallid = ?"
    connection.query(sql, [hallid], (error, links) => {
        if (error) {
            console.log(error.message)
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

router.get('/get-agenda/:id', (req, res) => {
    connection.query('SELECT * FROM hall_agenda WHERE hallid = ?', [req.params.id], (error, agenda) => {
        if (error) {
            var err = {
                "status": false,
                "message": error.message
            };
            return res.status(500).json(err);
        }
        else {
            for (var i = 0; i < agenda.length; i++) {
                agenda[i].document = '/document/scientific-agenda/' + agenda[i].document
            }
            var data = {
                "status": true,
                "message": "Hall agenda found",
                "result": agenda
            };
            return res.status(200).json(data);
        }
    })
})

module.exports = router