import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

// Utility function to send an email using VTITAN SMTP settings
const sendEmail = async ({ to, subject, text, html }) => {
  try {
    // Create a reusable transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.VTITAN_SMTP_HOST, // Example: smtp.titan.email
      port: 465, // Use 465 for SSL or 587 for TLS
      secure: true, // true for port 465 (SSL), false for 587 (TLS)
      auth: {
        user: process.env.VTITAN_EMAIL, // Your VTITAN email address
        pass: process.env.VTITAN_PASS,  // Password or app-specific password
      },
    });

    // Set up email options
    const mailOptions = {
      from: `"Innova IDS Form" <${process.env.VTITAN_EMAIL}>`, // Sender name and email
      to,       // Recipient email
      subject,  // Email subject
      text,     // Plain text body
      html,     // Optional HTML body (can be undefined)
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email successfully sent to: ${to}`);
    
  } catch (error) {
    console.error('❌ Failed to send email:', error.message);
    throw new Error('Email sending failed'); // Rethrow for controller to handle
  }
};

export default sendEmail;
