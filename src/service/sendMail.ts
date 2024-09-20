import nodemailer from"nodemailer";
import * as aws from "@aws-sdk/client-ses";
import { config } from "../utils";

const ses = new aws.SES({
    apiVersion: "2010-12-01",
    region: 'us-east-1',
    credentials:{
        accessKeyId: config.accessKey,
        secretAccessKey: config.secretAccessKey,
        sessionToken: config.sessionToken
    },
});

//create NodeMailer SES transporter
const transporter = nodemailer.createTransport({
    SES: { ses, aws },
});


const sendmail = () => {
    //mail option
    const mailOption = {
        from:"sender address",
        to:"receiver address",
        subject: "Testing to send Email using Nodemailer plus SES",
        text:"Anish well done !! you have done it."
    }

    //send mail
    transporter.sendMail(
        //mail options
        mailOption,
        //callback
        (error,info)=>{
            if(error){
                console.log('Error sending email: ', error.message);
            }else{
                console.log('Email sent:', info.messageId);
            }
        }
    )
}

export default sendmail;