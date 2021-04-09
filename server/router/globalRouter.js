const express = require("express");
const nodemailer = require("nodemailer");

const globalRouter = express.Router();

globalRouter.post("/mail", (req, res)=> {
    const from = req.body.from;
    const date = new Date;
    const description = req.body.description;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        secure: true,
        auth: {
            user: process.env.MAILER_GMAIL_MYMAIL,
            pass: process.env.MAILER_GMAIL_PASSWORD,
        }
    });
    
    const mailOptions = {
        from : from,
        to : process.env.MAILER_GMAIL_MYMAIL,
        subject: `Introduce Page에서 ${date.getMonth()+1}월${date.getDate()}일에 " ${from} " 님으로 부터 온 메일입니다.`,
        text: description,
    }

    transporter.sendMail(mailOptions, (err, info)=>{
        if(err) return res.status(400).send(err);
        return res.status(200).send({ msg : `${from}님, 메일이 정상적으로 전달되었습니다.`, success: true});
    });
});

module.exports = globalRouter;