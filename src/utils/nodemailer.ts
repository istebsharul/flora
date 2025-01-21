import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

console.log('Email:', email); // For debugging
console.log('Password:', pass); // For debugging

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass,
    },
    // logger: true, // Enable logger for debugging
    // debug: true,  // Enable debug for more detailed output
});

export const mailOptions = {
    from: email,
    to: email,
    // subject: "Default Subject",
    // text: "Default text content",
};
