import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_t0hu26b';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_pgv0ca9';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'jAZZwZDQa2rAZ9TAs';

/**
 * Send inquiry reply notification to inquirer via EmailJS
 * @param {Object} params - Email parameters
 * @param {string} params.inquirer_email - Inquirer's email address
 * @param {string} params.inquirer_name - Inquirer's name
 * @param {string} params.reply_message - Admin's reply message
 * @returns {Promise<boolean>} - Success status
 */
export async function sendInquiryReplyEmail({ inquirer_email, inquirer_name, reply_message }) {
  try {
    const templateParams = {
      inquirer_email,
      inquirer_name,
      reply_message,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}

export default {
  sendInquiryReplyEmail,
};
