var nodemailer = require("nodemailer");


var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "juan@gmail.com",
        pass: "suizo520"
    }
});
