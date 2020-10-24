// var sendEmail = require('../middleware/SendEmail.js');
// var sendSms = require('../middleware/SendSms.js');
const express = require("express");
const request = require('request');
const router = express.Router();
const connection = require('../config')
const axios = require('axios')
var sequential = require("sequential-ids");
const jwt = require("jsonwebtoken")
// const md5 = require('md5')

const jwtKey = "VES_secret@gthjkio"
const jwtExpirySeconds = 259200 //86400 second for 1 day..Here it is set for 3 days

require('dotenv').config();
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// var generator = new sequential.Generator({
//     digits: 5, letters: 0,
//     restore: `${process.env.RESET_UID}`
// });

//Register
router.post('/', async (req, res) => {

  // console.log("called")
  let str, uidval, no, temp
  const { name, designation, institute, email, mobile, city, state } = req.body;

  var sql = 'insert into user(name,designation,institute,email,mobile,city,state) values(?,?,?,?,?,?,?)';
  connection.query(sql, [name, designation, institute, email.toLowerCase(), mobile, city, state], function (error, result) {

    if (error) {
      console.log("Error in registration")
      var err = {
        "status": false,
        "message": error.message
      };
      return res.status(500).json(err);
    }
    else {
      console.log("registered successfully");
      if (result.affectedRows > 0) {

        // console.log("result", result)
        // console.log("result", result.insertId)

        const token = jwt.sign({ email }, jwtKey, {
          algorithm: "HS256",
          expiresIn: jwtExpirySeconds,
        })

        // cometchatbody = {
        //   uid: result.insertId,
        //   name: name,
        // }

        // const options = {
        //   method: 'POST',
        //   url: 'https://api-us.cometchat.io/v2.0/users',
        //   headers: { 'content-type': 'application/json', accept: 'application/json',appId:'2438793e19b8609',apiKey:'d7d0c51e09bb7a0d82c3dba347cb0535a6545615' },
        //   body:cometchatbody,
        //   json:true
        // };


        // request(options, function (error, response, body) {
        //   if (error) throw new Error(error);
        //   console.log(body);
        // });

        console.log(token);
        var data = {
          status: true,
          _token: token,
          uid: result.insertId,
          name: name,
          designation: designation,
          institute: institute,
          email: email,
          mobile: mobile,
          message: "Authenticated Successfully",
        };
        // return res.status(200).json(data);






        let sqles = "select * from eventsetting"
        connection.query(sqles, (error, es) => {
          if (error) {
            res.send(error.message)
            console.log(error)
          } else {
            // const message = `Dear Dr. ${name}, Welcome to ${es[0].eventname}, on ${es[0].eventdate}. Your user id ${email}`
            console.log("in finally block")
            try {
              // const logo =  "/emailtemplate/logo.png"
              // console.log(logo)
              const msg = {
                to: `${email}`,
                from: {
                  email: 'noreply@expocongroup.com',
                  name: `${es[0].eventname}`
                },
                // fromname: 'Expocon Group',
                subject: 'Your Registration Confirmation',
                text: 'Your registration for SEPSICON is confirmed.',
                html: `<div style="font-family:'Open Sans',arial,sans-serif;font-size:13px;margin-top:0;margin-bottom:0;margin-left:0;margin-right:0;background-color:#ebecec">
                <table border='0' cellpadding='0' cellspacing='0' style='width:600px;font-family:Open Sans,arial,sans-serif' align='center'>
                <tbody><tr>
                  <td height='10'></td>
                </tr>
                <tr>
                  <td>
                    <table border='0' cellpadding='0' cellspacing='0' style='width:100%;text-align:center'>
                      <tbody><tr>
                        <td valign='middle'><a href='https://www.sepsicon.com/'><img src='https://www.sepsicon.com/img/emailheader.jpg' alt='SEPSICON logo' title='SEPSICON logo' class='CToWUd'></a></td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>
                <tr>
                  <td height='10'></td>
                </tr>
                
                <tr>
                <td style='background:#fff'>
                <table border='0' cellpadding='0' cellspacing='0' style='width:100%;text-align:center;font-family:Open Sans,arial,sans-serif'>
                  <tbody>
                    
                  <tr>
                    <td style='padding-top:40px;padding-left:30px;padding-right:30px'>
                      <table border='0' cellpadding='0' cellspacing='0' style='width:100%;text-align:center'>
                        <tbody><tr>
                          <td valign='middle' style='line-height:36px;font-size:32px;font-weight:700;color:#3b3b3b'>Your Registration Confirmation</td>
                        </tr>
                      </tbody></table>
                    </td>
                  </tr>
                  <tr>
                    <td style='padding-top:40px;padding-left:30px;padding-right:30px'>
                      <table border='0' cellpadding='0' cellspacing='0' style='width:100%;text-align:center'>
                        <tbody><tr>
                          <td valign='middle' style='padding-bottom:8px;line-height:21px;text-align:left;font-size:13px;color:#4e4f4f'>
                          <span style='font-size:14px;margin-right:3px'>Dear</span>&nbsp; <span>$full_name,</span>
                          </td>
                        </tr>
                        <tr>
                          <td valign='middle' style='line-height:21px;text-align:left;font-size:13px;color:#4e4f4f'> 		  
                         Your registration for SEPSICON is confirmed. Please log in with your Registered Mobile Number on 24th October.
                          </td>
                        </tr>
                        <tr>
                          <td valign='middle' style='line-height:21px;text-align:left;font-size:13px;color:#4e4f4f'> 		  
                         Please <a href='http://sepsicon.com/img/invite.pdf' target='_blank'>click here</a> for SEPSICON agenda.
                          </td>
                        </tr>
                        <tr>
                          <td valign='middle' style='line-height:21px;text-align:left;font-size:13px;color:#4e4f4f'> 		  
                         Please <a href='http://sepsicon.com/img/VirtualTourGuide.pdf' target='_blank'>click here</a> for SEPSICON Tour Guide.
                          </td>
                        </tr>
                                
                     </tbody></table>
                    </td>
                  </tr>
                    
                   <tr>
                   <td align='center' style='padding-top:30px;padding-left:30px;padding-right:30px'>
                   <table border='0' cellpadding='0' cellspacing='0' style='width:100%;text-align:center;color:#4e4f4f'>
                   <tbody>   
                   <tr><td style='text-align:center;line-height:21px;font-weight:600;font-size:12px;text-transform:uppercase;padding-bottom:6px' valign='middle'>Add to my calendar</td>
                   </tr>
                   
                   <tr>
                   <td style='text-align:center'> <table border='0' cellpadding='0' cellspacing='0' style='width:100%;text-align:center;font-weight:400;font-size:13px'><tbody><tr><td><table border='0' cellpadding='0' cellspacing='0' style='text-align:center;width:100%;margin-right:15px;margin-top:10px;'><tbody><tr><td style='text-align:center;padding-right:5px;display:inline;padding-top:4px'>
                   <a href='http://sepsicon.com/img/calendar.ics' target='_blank' ><img src='http://sepsicon.com/img/gcalender.jpg' width='48' height='30' class='CToWUd'></a>
                   <a href='http://sepsicon.com/img/calendar.ics' target='_blank' ><img src='http://sepsicon.com/img/calos.jpg' width='48' height='30' class='CToWUd'></a>
                  </td></tr></tbody></table></td></tr></tbody></table></td> </tr> </tbody></table> </td></tr>
                  
                    
                  </tbody></table>
                    </td>
                  
                    </tr>
                  <tr>
                    <td style='background:#fff'>
                    <table align='center' border='0' cellpadding='0' cellspacing='0' style='padding-bottom:20px;padding-top:20px;width:100%;text-align:center;font-size:12px;color:#4e4f4f;font-family:Open Sans,arial,sans-serif'>
                        <tbody>
                        <tr>
                          <td style='padding-bottom:6px'>This email was sent to <a style='color:#1c83a9;text-decoration:none' href='mailto:'+$email target='_blank'>$email</a></td>
                        </tr>
                        <tr>
                          <td style='line-height:2;'>Cadila Pharmaceuticals Ltd,<br> Cadila Corporate Campus,Sarkhej Dholka Road ,Bhat Ahmedabad 382210 Gujarat India</td>
                        </tr>
                      </tbody></table></td>
                  </tr>
                  <tr>
                    <td height='40'></td>
                  </tr>
                   
                </tbody></table>
                                </div>`,
                substitutions: {
                  name: 'Expocon Group'
                }
              }

              sgMail.send(msg)
              // sendSms({
              //     message: message,
              //     mobile: mobile
              // })
              //     .then(() => {
              //         console.log("SMS Sending")
              //     }).catch((error) => {
              //         console.log(error)
              //         console.log("erorr at a")
              //     });


              // var data = {
              //     "status": true,
              //     "flag": 1,
              //     "message": 'Registered Successfully...'
              // };
              return res.status(200).json(data);
            } catch (err) {
              console.log(err)
              console.log("Error in email sending");
            } finally {
              cometchatbody = {
                uid: result.insertId,
                name: name,
              }

              const options = {
                method: 'POST',
                url: 'https://api-us.cometchat.io/v2.0/users',
                headers: { 'content-type': 'application/json', accept: 'application/json', appId: '2438793e19b8609', apiKey: 'd7d0c51e09bb7a0d82c3dba347cb0535a6545615' },
                body: cometchatbody,
                json: true
              };


              request(options, function (error, response, body) {
                if (error) throw new Error(error);
                console.log(body);
              });
            }
          }
        })
      }
      else {
        console.log("error event setting");
        var err2 = {
          "status": false,
          "flag": 0
        };
        return res.status(500).json(err2);
      }
    }
  });
})


//validate email
router.get('/:email', (req, res) => {
  const emailval = req.params.email;
  let sql = "select * from user where email = ?"
  connection.query(sql, [emailval], (error, result) => {
    if (error) {
      var err = {
        "status": false,
        "flag": 0,
        "message": "Some error in query"
      };
      return res.status(500).json(err);
    }
    else {
      if (result.length > 0) {
        var data = {
          "status": true,
          "flag": 0,
          "message": 'Email already exist, please login.'
        };
      }
      else {
        var data = {
          "status": true,
          "flag": 1,
          "message": 'Email accepted'
        };
      }
      return res.status(200).json(data);
    }
  })
})
module.exports = router;