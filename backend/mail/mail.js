require('dotenv').config()
var nodemailer = require('nodemailer');
function sendEmail(to,otp) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'zummon97@gmail.com',
            pass: process.env.EMAILPASSWORD
        }
    });
    // var cc = ["hossain6857@gmail.com"]
    var str = "your otp = ";
    var a =otp;
    str+=a;
    str += "\notp valid till 2min"
    var mailOptions = {
        from: 'zummon97@gmail.com',
        to: to,
        // cc:cc,
        subject: 'Reset Password VivaExam!!',
        text: str
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
module.exports = sendEmail
