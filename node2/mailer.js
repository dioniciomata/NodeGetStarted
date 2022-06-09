var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'dioniciomatamacias@gmail.com',
		pass: 'md320918'
	}
});

var mailOptions = {
	from:'dioniciomatamacias@gmail.com',
	to: 'ddcreativehouse@gmail.com',
	subject: 'Hi pato!',
	text: 'Eso fue rápido!',
};

transport.sendMail(mailOptions, function(err, info){
	if (err) { console.log(err);}
	else { console.log('Email sent '+ info.response);};
});