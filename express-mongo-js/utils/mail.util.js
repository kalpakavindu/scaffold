import nodemailer from 'nodemailer';

/**
 * Create new transporter object
 * @returns {nodemailer.Transporter}
 */
export function createTransporter() {
  const transporter = nodemailer.createTransport({
    secure: true,
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  return transporter;
}
