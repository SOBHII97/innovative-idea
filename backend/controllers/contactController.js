// controllers/contactController.js

import Message from '../Database/models/Message.js';
import sendEmail from '../utils/sendEmail.js';

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Save message to database
    const newMessage = new Message({ name, email, subject, message });
    await newMessage.save();

    // Email content
    const emailBody = `
      You have received a new contact form message.

      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      
      Message:
      ${message}
    `;

    // Send email to company inbox
    await sendEmail({
      to: process.env.COMPANY_EMAIL,
      subject: `New Contact Message: ${subject}`,
      text: emailBody,
    });

    // Success response
    res.status(201).json({ message: 'Message sent and saved successfully' });

  } catch (err) {
    console.error('Error in contact form submission:', err);
    res.status(500).json({ error: 'Failed to send message', details: err.message });
  }
};
