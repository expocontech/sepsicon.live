const express = require('express');
const router = express.Router();
var connection = require('../config');

router.get('/',(req,res)=>{
    connection.query('SELECT * FROM programme',(error,programme)=>{
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
                for(var i=0;i<programme.length;i++)
                {
                    programme[i].image = '/images/programme/'+programme[i].image,
                    programme[i].pdf = '/document/programme/'+programme[i].pdf
                }
                var data = {
                    "status": true,
                    "message": "Programme found",
                    "result": programme
                };
                return res.status(200).json(data);
        }
    })
})


module.exports = router;