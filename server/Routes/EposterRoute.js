const connection = require('../config.js')
const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    let sql = "SELECT * FROM eposter"
    connection.query(sql,[0], (error, eposter) => {
        if (error) {
            var err = {
                "status": false,
                "message": error.message
            }
            return res.status(500).json(err);
        }
        else {
            // if (eposter.length > 0) {

                for(var i=0;i<eposter.length;i++)
                {
                    eposter[i].image = "/images/eposter/"+eposter[i].image
                }

                var data = {
                    "status": true,
                    "message": "Eposter found",
                    "result": eposter
                };
                return res.status(200).json(data);
            // }
            // else {
            //     var data = {
            //         "status": true,
            //         "message": "Eposter Not found",
            //         "result": eposter
            //     };
            //     return res.status(200).json(data);
            // }
        }
    })
})


//Eposter modal data
router.get('/:eid', (req, res) => {
    eid = req.params.eid
    let sql = "SELECT * FROM eposter WHERE id = ?" 
    connection.query(sql,[eid],(error, eposterdetail) => {
        if (error) {
            var err = {
                "status": false,
                "message": error.message
            }
            return res.status(500).json(err);
        }
        else {
            // if (eposterdetail.length > 0) {

                for(var i=0;i<eposterdetail.length;i++)
                {
                    eposterdetail[i].image = "/images/eposter/"+eposterdetail[i].image
                }
                var data = {
                    "status": true,
                    "message": "Eposter Detail found",
                    "result": eposterdetail
                };
                return res.status(200).json(data);
            // }
            // else {
            //     var data = {
            //         "status": true,
            //         "message": "Eposter Detail Not found",
            //         "result": eposterdetail
            //     };
            //     return res.status(200).json(data);
            // }
        }
    })
})


module.exports = router