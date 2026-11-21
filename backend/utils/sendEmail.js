const nodemailer = require('nodemailer');

/**
 * Sends an email using SMTP credentials from environment variables.
 * If SMTP_USER is not set, the function resolves silently (email is optional).
 *
 * @param {string} subject - Email subject
 * @param {string} text    - Plain text body
 * @param {string} html    - HTML body (optional)
 * @returns {Promise<void>}
 */
const sendEmail = async (subject, text, html) => {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_TO } = process.env;

  if (!SMTP_USER) {
    // Email not configured — skip silently
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(SMTP_PORT, 10) || 587,
      secure: parseInt(SMTP_PORT, 10) === 465, // true for port 465, false for others
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Kriyova Technologies" <${SMTP_USER}>`,
      to: SMTP_TO || SMTP_USER,
      subject,
      text,
      html: html || text,
    });

    console.log(`Email sent: ${subject}`);
  } catch (error) {
    // Log but don't throw — email failure should not break the API response
    console.error(`Email send error: ${error.message}`);
  }
};

module.exports = sendEmail;
