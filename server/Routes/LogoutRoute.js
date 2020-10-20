var connection = require('./../config');
const express = require('express')
const router = express.Router()

router.get('/:email', (req, res) => {
    // console.log(req)
    const { email } = req.body
    console.log(req.body)
    console.log("Email val", email)
    let sql = "UPDATE user SET loginstatus = ? WHERE email = ?"
    connection.query(sql, [0, req.params.email], (error, result) => {
        if (error) {
            console.log(error.message)
            var err = {
                status: false,
                message: error.message
            }
            return res.status(500).json(err)
        }
        else {
            console.log(result.affectedRows + " rows affected")
            console.log("updated logout")
            const data = {
                status: true,
                message: "Logged out successfully!"
            }
            return res.status(200).json(data);
        }
    })
})


module.exports = router