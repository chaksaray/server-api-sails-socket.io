const util = require('util');
const fs = require('fs');
const ejs = require('ejs');
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 25, // true for 465, false for other ports
    tls: {
        rejectUnauthorized: false
    }
});
let domain_url = "";
if (sails.config.environment == "production") {
    domain_url = "";
} else {
    domain_url = "";
}
/**
 * Send email by each Templates
 * @param {*} from 
 * @param {*} to 
 * @param {*} subject 
 * @param {*} template 
 */
async function onSend(from, to, subject, template) {
    // setup email data with unicode symbols
    let mailOptions = {
        from: from || '', // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        html: template
    };
    // send mail with defined transport object
    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
}
module.exports = {
};