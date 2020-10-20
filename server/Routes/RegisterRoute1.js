// var sendEmail = require('../middleware/SendEmail.js');
// var sendSms = require('../middleware/SendSms.js');
const express = require("express");
const router = express.Router();
const connection = require('../config')
const axios = require('axios')
var sequential = require("sequential-ids");
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
                                text: 'Your registration for RSSDI - Diabetes Technology Network (DTN) is confirmed.',
                                html: `<div style="font-family:'Open Sans',arial,sans-serif;font-size:13px;margin-top:0;margin-bottom:0;margin-left:0;margin-right:0;background-color:#ebecec">
                                <table border="0" cellpadding="0" cellspacing="0" style="width:600px;font-family:'Open Sans',arial,sans-serif" align="center">
                                <tbody><tr>
                                  <td height="10"></td>
                                </tr>
                                <tr>
                                  <td>
                                    <table border="0" cellpadding="0" cellspacing="0" style="width:100%;text-align:center">
                                      <tbody><tr>
                                        <td valign="middle"><a href="https://www.dtnrssdi.live/"><img src="/emailtemplate/logo.png" alt="DTN RSSDI logo" title="DTN RSSDI logo" class="CToWUd"></a></td>
                                      </tr>
                                    </tbody></table>
                                  </td>
                                </tr>
                                <tr>
                                  <td height="10"></td>
                                </tr>
                                
                                <tr>
                                <td style="background:#fff">
                                <table border="0" cellpadding="0" cellspacing="0" style="width:100%;text-align:center;font-family:'Open Sans',arial,sans-serif">
                                  <tbody>
                                  <tr>
                                    <td style="background-repeat:repeat;background-size:cover;border-collapse:collapse!important;color:#fff;font-size:16px;font-weight:400;line-height:1.5;margin:0;padding:0;text-align:left;vertical-align:top;word-wrap:break-word;background-image:url(/emailtemplate/abstract19.jpg);background-color:#309ae6;border-radius:3px 3px 0 0">
                                    <table border="0" cellpadding="0" cellspacing="0" style="width:100%;text-align:center">
                                        <tbody><tr>
                                          <td style="background-repeat:no-repeat;background-size:cover;border-collapse:collapse!important;color:#fff;font-size:16px;font-weight:400;line-height:1.5;margin:0;padding:15px;text-align:left;vertical-align:top;word-wrap:break-word;background-image:url(bg.png);border-radius:3px 3px 0 0">
                                          <table border="0" cellpadding="0" cellspacing="0" style="width:100%;height:170px;text-align:center">
                                              <tbody><tr>
                                                <td>
                                                <table border="0" cellpadding="0" cellspacing="0" style="width:100%;text-align:center">
                                                                   
                                                  <tbody><tr>
                                                      <td style="font-family:'Open Sans',arial,sans-serif;font-size:18px;font-weight:600;color:#fff"> 
                                                      RSSDI - Diabetes Technology Network (DTN)
                                                      </td>
                                                    </tr>
                                                  </tbody></table>
                                                  </td>
                                              </tr>
                                            </tbody></table>
                                            </td>
                                        </tr>
                                      </tbody></table>
                                      </td>
                                  </tr>
                                  <tr>
                                    <td style="padding-top:20px;padding-left:30px;padding-right:30px;padding-bottom:20px;background:#f9f9f9">
                                      <table border="0" cellpadding="0" cellspacing="0" style="width:100%">
                                        <tbody><tr>
                                          <td>
                                            <table border="0" cellpadding="0" cellspacing="0" style="width:100%;text-align:center">
                                              <tbody><tr>
                                                <td valign="top" style="font-size:12px;color:#a4a4a4;text-align:left;text-transform:uppercase;font-weight:500;padding-bottom:3px;padding-right:15px;width:50%">Date &amp; Time</td>
                                                <td valign="top" style="display:none;font-size:12px;color:#a4a4a4;text-align:right;text-transform:uppercase;font-weight:500;padding-bottom:3px;padding-left:15px;width:50%">Location</td>
                                              </tr>
                                              <tr>
                                                <td valign="top" style="font-size:12px;color:#3b3b3b;text-align:left;padding-right:15px;width:50%">Sat, September 12 2020, 02:00 PM to 08:30 PM - Sun, September 13 2020,  09:30 AM to 01:00 PM [GMT]</td>
                                                <td valign="top" style="display:none;font-size:12px;color:#3b3b3b;text-align:right;padding-left:15px;width:50%"></td>
                                              </tr>
                                            </tbody></table>
                                          </td>
                                        </tr>
                                      </tbody></table>
                                    </td>
                                  </tr>
                                    
                                  <tr>
                                    <td style="padding-top:40px;padding-left:30px;padding-right:30px">
                                      <table border="0" cellpadding="0" cellspacing="0" style="width:100%;text-align:center">
                                        <tbody><tr>
                                          <td valign="middle" style="line-height:36px;font-size:32px;font-weight:700;color:#3b3b3b">Your Registration Confirmation</td>
                                        </tr>
                                        <tr>
                                          <td valign="middle" style="padding-top:12px"><img src="/emailtemplate/titlebg.jpg" alt="Title Line" title="Title Line" class="CToWUd"></td>
                                        </tr>
                                      </tbody></table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="padding-top:40px;padding-left:30px;padding-right:30px">
                                      <table border="0" cellpadding="0" cellspacing="0" style="width:100%;text-align:center">
                                        <tbody><tr>
                                          <td valign="middle" style="padding-bottom:8px;line-height:21px;text-align:left;font-size:13px;color:#4e4f4f">
                                          <span style="font-size:14px;margin-right:3px">Hi</span>&nbsp;<span>${name},</span>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td valign="middle" style="line-height:21px;text-align:left;font-size:13px;color:#4e4f4f"> 		  
                                          Your registration for RSSDI - Diabetes Technology Network (DTN) is confirmed.
                                          </td>
                                        </tr>
                                                
                                     </tbody></table>
                                    </td>
                                  </tr>
                                    
                                   <tr>
                                   <td align="center" style="padding-top:30px;padding-left:30px;padding-right:30px">
                                   <table border="0" cellpadding="0" cellspacing="0" style="width:100%;text-align:center;color:#4e4f4f">
                                   <tbody>   
                                   <tr><td style="text-align:center;line-height:21px;font-weight:600;font-size:12px;text-transform:uppercase;padding-bottom:6px" valign="middle">Add to my calendar</td>
                                   </tr>
                                   
                                   <tr>
                                   <td style="text-align:center"> <table border="0" cellpadding="0" cellspacing="0" style="width:100%;text-align:center;font-weight:400;font-size:13px"><tbody><tr><td><table border="0" cellpadding="0" cellspacing="0" style="text-align:center;width:100%;margin-right:15px;margin-top:10px;"><tbody><tr><td style="text-align:center;padding-right:5px;display:inline;padding-top:4px">
                                   <a href="/emailtemplate/calendar.ics" target="_blank" ><img src="/emailtemplate/gcalender.jpg" width="48" height="30" class="CToWUd"></a>
                                   <a href="/emailtemplate/calendar.ics" target="_blank" ><img src="/emailtemplate/calos.jpg" width="48" height="30" class="CToWUd"></a>
                                  </td></tr></tbody></table></td></tr></tbody></table></td> </tr> </tbody></table> </td></tr>
                                  
                                    
                                    <tr>
                                      <td style="padding-left:30px;padding-right:30px"><table border="0" cellpadding="0" cellspacing="0" style="width:100%;text-align:center;font-size:13px;color:#666">
                                          <tbody><tr>
                                            <td colspan="4" style="padding-top:30px;padding-bottom:4px;font-weight:600;font-size:14px;color:#4e4f4f;line-height: 1.5;" valign="middle">Organized by <br>RSSDI Diabetes & Technology Task Force</td>
                                          </tr>
                                <tr>
                                  <td colspan="4" height="10"></td>
                                </tr>
                                          <tr>
                                            <td colspan="2" valign="middle" style="line-height:1.5"><p><b>Dr. Banshi Saboo</b><br>President - RSSDI</p></td>
                                            <td colspan="2" valign="middle" style="line-height:1.5"><p><b>Dr. Sanjay Agarwal</b><br>Secretary - RSSDI</p></td>
                                          </tr>
                                <tr>
                                  <td colspan="4" height="10"></td>
                                </tr>
                                          <tr>
                                            <td valign="middle" style="line-height:1.5"><p><b>Dr. Jothydev Kesavadev</b><br>Trivandrum</p></td>
                                            <td valign="middle" style="line-height:1.5"><p><b>Dr. Manoj Chawla</b><br>Mumbai</p></td>
                                            <td valign="middle" style="line-height:1.5"><p><b>Dr. Mithun Bhartia</b><br>Guwahati</p></td>
                                            <td valign="middle" style="line-height:1.5"><p><b>Dr. Jaiprakash Sai</b><br>Hyderabad</p></td>
                                          </tr>
                                          
                                        </tbody></table></td>
                                    </tr>
                                <tr>
                                      <td style="padding-top:30px"><table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%;text-align:center">
                                          <tbody><tr>
                                            <td align="center" valign="middle"><table border="0" cellpadding="0" cellspacing="0" style="width:100%;text-align:center;background:#f4f4f4;padding:25px 50px">
                                                <tbody><tr>
                                                  <td align="center" valign="middle"><table border="0" cellpadding="0" cellspacing="0" style="width:10%;float:left;text-align:center">
                                                      <tbody><tr>
                                                        <td align="center" valign="top" style="font-size:13px;color:#4e4f4f;padding-top:10px;padding-bottom:10px;padding-right:25px"><img src="https://ci5.googleusercontent.com/proxy/xMYxVBEmc721vPY196uyGOt1ndx5lNsbihKpfydwN5wnJ0sKjCFpFCyHoMJ8nde67KrHjN2l12yAe2eMTEVEccIREaLAqofnF1sDvkSwHd2moSpiyrsx4Yo=s0-d-e1-ft#https://d2poexpdc5y9vj.cloudfront.net/public/img/got-question-icon.png" class="CToWUd"></td>
                                                      </tr>
                                                    </tbody></table>
                                                    <table border="0" cellpadding="0" cellspacing="0" style="float:left;text-align:left">
                                                      <tbody><tr>
                                                        <td valign="top" style="font-size:13px;color:#4e4f4f;padding-top:12px;padding-left:0;padding-right:20px"><h2 style="padding:0;margin:0 0 6px;font-size:12px;text-transform:uppercase;line-height:16px">Got a Question?</h2>
                                                          <p style="padding:0;margin:0;line-height:16px">Contact the event organizer at <a style="color:#1c83a9" href="mailto:rssdihq@gmail.com" target="_blank">rssdihq@gmail.com</a></p></td>
                                                      </tr>
                                                    </tbody></table></td>
                                                </tr>
                                              </tbody></table></td>
                                          </tr>
                                        </tbody></table></td>
                                    </tr>
                                    
                                  </tbody></table>
                                    </td>
                                  
                                    </tr>
                                  <tr>
                                    <td style="background:#fff">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" style="padding-bottom:20px;padding-top:20px;width:100%;text-align:center;font-size:12px;color:#4e4f4f;font-family:'Open Sans',arial,sans-serif">
                                        <tbody>
                                        <tr>
                                          <td style="padding-bottom:6px">This email was sent to <a style="color:#1c83a9;text-decoration:none" href="mailto:"+${email} target="_blank">${email}</a></td>
                                        </tr>
                                        <tr>
                                          <td style="line-height:2;">Dr Sanjay Agarwal's Aegle Clinic for Diabetes Care<br> A-11, Narsimha Housing Society, 194, Boat Club Road, Pune - 411001 ( India )</td>
                                        </tr>
                                      </tbody></table></td>
                                  </tr>
                                  <tr>
                                    <td height="40"></td>
                                  </tr>
                                   
                                </tbody></table>
                                </div>`,
                                substitutions: {
                                    name: 'Expocon Group'
                                }
                            }

                            // sgMail.send(msg)
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


                            var data = {
                                "status": true,
                                "flag": 1,
                                "message": 'Registered Successfully...'
                            };
                            return res.status(200).json(data);
                        } catch (err) {
                            console.log(err)
                            console.log("Error in email sending");
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