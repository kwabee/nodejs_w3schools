var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {
        user: 'xxxx',
        pass: 'xxxx'
    }

});

var mailOptions = {
    from: 'xxx',
    to: 'xxxx',
    subject: 'Sending email using node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info) {
    if(error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});