var nodemailer = require("nodemailer");

module.exports.send = function(fr,sub,txt){
	var smtpTransport = nodemailer.createTransport("SMTP",{
	    service: "Gmail",
	    auth: {
	        user: "",//add email id and pwd for it to work
	        pass: ""
	    }
	});

	var mailOptions = {
	    from: fr, // sender address
	    to: "manoj.ieee@gmail.com", // list of receivers
	    subject: sub, // Subject line
	    text: "Mail sent by "+fr+"\n"+txt, // plaintext body
	    html: "<i>Mail sent by "+fr+"</i></br><p>"+txt +"</p>" // html body
	}
	
	smtpTransport.sendMail(mailOptions, function(error, response){
	    if(error){
	        console.log(error);
	    }else{
	        console.log("Message sent: " + response.message);
	    }
	
	    smtpTransport.close();
	});	
}
