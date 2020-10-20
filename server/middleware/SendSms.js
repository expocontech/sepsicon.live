require('dotenv').config();
const axios = require('axios')

const sendSms = async options => {
    // console.log(options)
    // console.log("SMS Called")
    // console.log(options)
    let apikey = process.env.SMS_KEY
    const no = options.mobile
    // console.log(no)
    const message = options.message
    // console.log(message)
    await axios.get(`https://www.smsgatewayhub.com/api/mt/SendSMS?APIKey=${apikey}&senderid=EVENTS&channel=OTP&DCS=0&flashsms=0&number=${no}&text=${message}&route=1`)
        .then((response) => {
            return 1;
            // console.log("sent...SMS" + no)
            console.log(response)
        })
        .catch((error) => {
            return 0;
            console.log(error)
        })
}
module.exports = sendSms