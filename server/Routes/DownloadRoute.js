const express = require('express');
const router = express.Router();
var connection = require('../config');

router.get('/',(req,res)=>{
    connection.query('SELECT * FROM download',(error,downloads)=>{
        if(error)
        {
            var err = {
                "status": false,
                "message": error.message
            };
            return res.status(500).json(err);
        }
        else
        {
            // if (downloads.length > 0) {
                for(var i=0;i<downloads.length;i++)
                {
                    downloads[i].document = '/document/downloads/'+downloads[i].document
                }
                var data = {
                    "status": true,
                    "message": "Downloads found",
                    "result": downloads
                };
                return res.status(200).json(data);
            // }
            // else {
            //     var data = {
            //         "status": false,
            //         "message": "Dowloads Not found",
            //         "result": downloads
            //     };
            //     return res.status(400).json(data);
            // }
        }
    })
})


module.exports = router;