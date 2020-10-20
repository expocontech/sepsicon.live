const express = require('express')
const router = express.Router()
const connection = require('../config.js')

//General Setting update
router.post('/general', (req, res) => {
    let sql = "UPDATE user SET name = ?, email = ?, institute = ? WHERE id = ?";
    const { uidval, nameval, emailval, companyval } = req.body
    connection.query(sql, [nameval, emailval, companyval, uidval], (error, general) => {
        if (error) {
            let err = {
                status: false,
                message: error.message
            }
            return res.status(500).json(err);
        }
        else {
            if (general.affectedRows > 0) {
                console.log("general setting updated")
                var data = {
                    "status": true,
                    "message": "General Settings Updated"
                };
                // console.log(data.status)
                return res.status(200).json(data);
            }
            else{
                var data = {
                    "status": false,
                    "message": "User Not Found"
                };
                return res.status(400).json(data);
            }
        }
    })
})


//Password update
router.post('/pass', (req, res) => {
    let sqlcheck = "SELECT * FROM user WHERE password = ? AND id = ?";
    const { uidval, opass, newpass } = req.body
    connection.query(sqlcheck, [opass, uidval], (error, result) => {
        if (error) {
            let err = {
                status: false,
                message: "Some error in query"
            }
            return res.status(500).json(err);
        }
        else {
            if (result.length > 0) {
                let sqlchange = "UPDATE user SET password = ? WHERE id = ?";
                connection.query(sqlchange, [newpass, uidval], (error, op) => {
                    if (error) {
                        let err = {
                            status: false,
                            message: error.message
                        }
                        return res.status(500).json(err);
                    }
                    else {
                        if (op.affectedRows > 0) {
                            var data = {
                                "status": true,
                                "message": "Password Updated"
                            };
                            return res.status(200).json(data);
                        }
                    }
                })
            }
            else {
                var data = {
                    "status": false,
                    "message": "Wrong old password"
                };
                return res.status(200).json(data);
            }
        }
    })
})

//Personal Info update
router.post('/personal', (req, res) => {
    let sql = "UPDATE user SET bio = ?,mobile = ?,web = ?,gender = ? WHERE id = ?";
    const { uidval, bioval, mobileval, web, gen } = req.body
    connection.query(sql, [bioval, mobileval, web, gen, uidval], (error, personal) => {
        if (error) {
            let err = {
                status: false,
                message: error.message
            }
            return res.status(500).json(err);
        }
        else {
            // if (personal.affectedRows > 0) {
                var data = {
                    "status": true,
                    "message": "Personal Info. Updated"
                };
                return res.status(200).json(data);
        }
    })
})
module.exports = router