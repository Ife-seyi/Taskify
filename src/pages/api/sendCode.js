// pages/api/sendCode.js

import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  const { email, code } = req.body;

  if (!email || !code) {
    return res.status(400).json({ message: 'Missing email or code' });
  }

  const msg = {
    to: email,
    from: process.env.FROM_EMAIL, // Must be verified in SendGrid
    subject: 'Your Taskify Verification Code',
    text: `Your verification code is: ${code}`,
    html: `<strong>Your verification code is: ${code}</strong>`,
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({ message: 'Email sent' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error sending email' });
  }
}
