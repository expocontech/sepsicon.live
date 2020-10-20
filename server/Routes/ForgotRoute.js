var sendEmail = require('../middleware/SendEmail.js');
const express = require("express");
const router = express.Router();
const connection = require('../config');
const { response } = require('express');
const axios = require('axios')

router.post('/', (req, res) => {


    let emailval = req.body.email;
    console.log(emailval)
    let sql = 'select password from user where email = ?';
    connection.query(sql, [emailval], async (error, result) => {
        if (error) {
            console.log('error1');
            var err = {
                "status": false,
                "message": error.message
            };
            return res.status(500).json(err);
        }
        else {
            // console.log(result.length > 0)
            if (result.length > 0) {
                console.log("ok")
                const message = `Your password is ${result[0].password}`;
                try {
                    await sendEmail({
                        email: `${emailval}`,
                        subject: 'Forgot password',
                        message
                    });

                    console.log('message', message)
                    var data = {
                        "status": true,
                        "flag": 1,
                        "message": 'Password Sent on your email'
                    };
                    return res.status(200).json(data);
                } catch (err) {
                    console.log("error2");
                    var err2 = {
                        "status": false,
                        "flag": 0,
                        "message": err.message
                    };
                    return res.status(500).json(err2);
                }
            }
            else {
                console.log("not ok")
                console.log('error 3')
                var err2 = {
                    "status": true,
                    "flag": 0,
                    "message": "Email is not registered"
                };
                return res.status(200).json(err2);
            }
        }
    })
});

router.post('/get-otp', (req, res) => {
    let sql = "select * from user where email = ?"
    const { email } = req.body
    connection.query(sql, [email], async (error, response) => {
        if (error) {
            var err = {
                status: false,
                message: error.message
            }
            return res.status(500).json(err)
        }
        else {
            if (response.length > 0) {
                otp = Math.floor(100000 + Math.random() * 900000)
                const mobile = response[0].mobile
                const name = response[0].name
                const op = await sendOTP(name, otp, mobile);
                if (op == 1) {
                    var data = {
                        status: true,
                        message: "OTP is sent to your registered mobile number",
                        mobile: mobile
                    }
                    return res.status(200).json(data)
                }
                else {
                    console.log("Some error in message sending")
                }
            }
        }
    })
})


router.post('/otp-validate', (req, res) => {
    const { otpval, mobile } = req.body
    console.log(otp, otpval)
    if (otp == otpval) {
        otp = ''
        let sql = "update user set loginstatus = ? WHERE mobile = ?"
        connection.query(sql, [0, mobile], (error, response) => {
            if (error) {
                console.log(error.message)
                var err = {
                    status: false,
                    message: error.message
                }
            }
            else {
                if (response.affectedRows > 0) {
                    var data = {
                        status: true,
                        message: "Now you can login "
                    }
                    return res.status(200).json(data)
                }
            }
        })
    }
    else {
        console.log("wrong otp")
        var data = {
            "status": true,
            "message": "Enter Valid OTP",
            "flag": 0,
            "result": []
        };
        return res.status(200).json(data);
    }
})

//Sending OTP
async function sendOTP(name, otp, mno) {
    let apikey = process.env.SMS_KEY
    const drname = name
    // const otpval = otp
    const no = mno
    let message = `Dear Dr ${drname}, your OTP to edit ESI membership records is ${otp}`
    return await axios.get(`https://www.smsgatewayhub.com/api/mt/SendSMS?APIKey=${apikey}&senderid=EVENTS&channel=OTP&DCS=0&flashsms=0&number=${no}&text=${message}&route=1`)
        .then(function (response) {
            console.log(response)
            return 1;
        })
        .catch(function (error) {
            console.log(error)
            return 0;
        })
}
module.exports = router