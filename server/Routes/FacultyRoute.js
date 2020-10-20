const express = require('express');
const router = express.Router();
var connection = require('../config');

router.get('/',(req,res)=>{
    let sql = 'SELECT f.* FROM faculty f, facultytype ft where f.type = ft.id';
    connection.query(sql,(error,faculty)=>{
        if(error)
        {
            let err = {
                status :  false,
                message: error.message
            }
            return res.status(500).json(err);
        }
        else{
                for(var i=0;i<faculty.length;i++)
                {
                    faculty[i].photo = "/images/faculty/"+faculty[i].photo
                }

                var data = {
                    "status": true,
                    "message": "Faculty found",
                    "result": faculty
                };
                return res.status(200).json(data);
            // }
            // else {
            //     var data = {
            //         "status": false,
            //         "message": "Faculty Not found",
            //         "result": faculty
            //     };
            //     return res.status(400).json(data);
            // }
        }
    })
    
})


//Get Faculty Type
router.get('/factype', (req, res) => {
    let sql = "select * from facultytype WHERE isactive = ?";
    connection.query(sql, [1], (error, factype) => {
        if (error) {
            var err = {
                "status": false,
                "message": error.message
            };
            return res.status(500).json(err);
        }
        else {
            // if (factype.length > 0) {

                var data = {
                    "status": true,
                    "message": "Faculty type found",
                    "result": factype
                };
                return res.status(200).json(data);
            // }
            // else {
            //     var data = {
            //         "status": false,
            //         "message": "Faculty type Not found",
            //         "result": factype
            //     };
            //     return res.status(200).json(data);
            // }
        }
    })
})

router.get('/:id',(req,res)=>{
    const fid = req.params.id
    let sql = 'SELECT * FROM facultytype where id = ?';
    connection.query(sql,[fid],(error,faculty)=>{
        if(error)
        {
            let err = {
                status :  false,
                message: error.message
            }
            return res.status(500).json(err);
        }
        else{
            if (faculty.length > 0) {

                for(var i=0;i<faculty.length;i++)
                {
                    faculty[i].photo = "/images/faculty/"+faculty[i].photo
                }

                var data = {
                    "status": true,
                    "message": "Faculty found",
                    "result": faculty
                };
                return res.status(200).json(data);
            }
            else {
                var data = {
                    "status": false,
                    "message": "Faculty Not found",
                    "result": faculty
                };
                return res.status(200).json(data);
            }
        }
    })
    
})

module.exports = router