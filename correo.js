var nodemailer = require("nodemailer");


var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "juan@gmail.com",
        pass: "suizo520"
    }
});


var mailoptions = {
    from: "suizo@gmail.com",
    to: "españa@gmail.com",
    subject: "enviando email por nodeJS",
    text: "es muy facil"
}

transporter.sendMail(mailoptions, function(err, info){
    if (err){
        console.log(err)
    } else{
        console.log("email enviado: " + info.response)
    }

})
