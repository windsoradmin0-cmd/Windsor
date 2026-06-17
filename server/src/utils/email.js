import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = process.env.FROM_EMAIL || 'Windsor Residence <onboarding@resend.dev>';

/**
 * Send email notification to admin when a new inquiry is submitted
 */
export async function sendInquiryNotificationToAdmin({ inquirerName, inquirerEmail, inquirerPhone, message, roomId }) {
  const adminEmail = process.env.ADMIN_EMAIL || process.env.GMAIL_EMAIL;
  const subject = roomId 
    ? `🏠 New Room Inquiry from ${inquirerName}` 
    : `📬 New Contact Form Message from ${inquirerName}`;
  
  const text = `
New Inquiry Received
=================== 

Name: ${inquirerName}
Email: ${inquirerEmail}
Phone: ${inquirerPhone || 'Not provided'}
${roomId ? `Room ID: ${roomId}` : 'Type: General Contact Form'}

Message:
--------
${message}

--------
Received at: ${new Date().toISOString()}
  `.trim();

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Inquiry - Windsor Residence</title>
  <!--[if mso]>
  <style type="text/css">
    table {border-collapse: collapse;}
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #F5F3FF; font-family: 'Segoe UI', Helvetica Neue, Arial, sans-serif;">
  
  <!-- Outer Wrapper -->
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #F5F3FF;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        
        <!-- Main Container Card -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: #FFFFFF; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); overflow: hidden;">
          
          <!-- Header Section -->
          <tr>
            <td style="background: linear-gradient(135deg, #5B21B6 0%, #7C3AED 100%); padding: 32px 40px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #FFFFFF; letter-spacing: -0.5px;">
                🏠 New Inquiry Received
              </h1>
              <p style="margin: 8px 0 0 0; font-size: 14px; color: rgba(255,255,255,0.85);">
                ${roomId ? 'Room Inquiry' : 'Contact Form Message'}
              </p>
            </td>
          </tr>
          
          <!-- Content Section -->
          <tr>
            <td style="padding: 40px;">
              
              <!-- Name Field -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 20px;">
                <tr>
                  <td style="padding: 16px 20px; background-color: #F5F3FF; border-radius: 8px;">
                    <p style="margin: 0 0 4px 0; font-size: 12px; font-weight: 600; color: #6B7280; text-transform: uppercase; letter-spacing: 0.5px;">Name</p>
                    <p style="margin: 0; font-size: 16px; font-weight: 600; color: #1F2937;">${inquirerName}</p>
                  </td>
                </tr>
              </table>
              
              <!-- Email Field -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 20px;">
                <tr>
                  <td style="padding: 16px 20px; background-color: #F5F3FF; border-radius: 8px;">
                    <p style="margin: 0 0 4px 0; font-size: 12px; font-weight: 600; color: #6B7280; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                    <p style="margin: 0; font-size: 16px;"><a href="mailto:${inquirerEmail}" style="color: #7C3AED; text-decoration: none; font-weight: 500;">${inquirerEmail}</a></p>
                  </td>
                </tr>
              </table>
              
              <!-- Phone Field -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 20px;">
                <tr>
                  <td style="padding: 16px 20px; background-color: #F5F3FF; border-radius: 8px;">
                    <p style="margin: 0 0 4px 0; font-size: 12px; font-weight: 600; color: #6B7280; text-transform: uppercase; letter-spacing: 0.5px;">Phone</p>
                    <p style="margin: 0; font-size: 16px; color: #1F2937;">${inquirerPhone || 'Not provided'}</p>
                  </td>
                </tr>
              </table>
              
              ${roomId ? `
              <!-- Room ID Field -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 20px;">
                <tr>
                  <td style="padding: 16px 20px; background-color: #F5F3FF; border-radius: 8px;">
                    <p style="margin: 0 0 4px 0; font-size: 12px; font-weight: 600; color: #6B7280; text-transform: uppercase; letter-spacing: 0.5px;">Room ID</p>
                    <p style="margin: 0; font-size: 16px; color: #1F2937;">${roomId}</p>
                  </td>
                </tr>
              </table>
              ` : ''}
              
              <!-- Message Field -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 20px;">
                <tr>
                  <td style="padding: 16px 20px; background-color: #F5F3FF; border-radius: 8px;">
                    <p style="margin: 0 0 4px 0; font-size: 12px; font-weight: 600; color: #6B7280; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                    <p style="margin: 0; font-size: 15px; color: #1F2937; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                  </td>
                </tr>
              </table>
              
            </td>
          </tr>
          
          <!-- Footer Section -->
          <tr>
            <td style="background-color: #F9FAFB; padding: 24px 40px; text-align: center; border-top: 1px solid #E5E7EB;">
              <p style="margin: 0; font-size: 13px; color: #9CA3AF;">
                Received at: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila' })}
              </p>
            </td>
          </tr>
          
        </table>
        <!-- End Main Card -->
        
      </td>
    </tr>
  </table>
  <!-- End Outer Wrapper -->

</body>
</html>
  `.trim();

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: adminEmail,
      subject,
      text,
      html,
    });

    if (error) {
      console.error('Failed to send inquiry notification email:', error);
      return false;
    }

    console.log(`📧 Inquiry notification sent to admin: ${adminEmail}`);
    return true;
  } catch (error) {
    console.error('Failed to send inquiry notification email:', error.message);
    return false;
  }
}

/**
 * Send email reply notification to the inquirer
 */
export async function sendReplyNotificationToInquirer({ inquirerEmail, inquirerName, inquiryId, replyMessage }) {
  const subject = `📬 Windsor Residence: We have responded to your inquiry`;
  
  const text = `
Hello ${inquirerName},
=================== 

We have responded to your inquiry at Windsor Residence. 

Our Reply:
----------
${replyMessage}

Best regards,
Windsor Residence Team

---
This is an automated message. Please do not reply directly to this email.
  `.trim();

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Windsor Residence</title>
  <!--[if mso]>
  <style type="text/css">
    table {border-collapse: collapse;}
    .button {padding: 12px 24px !important;}
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #F5F3FF; font-family: 'Segoe UI', Helvetica Neue, Arial, sans-serif;">
  
  <!-- Preview Text (hidden) -->
  <div style="display: none; max-height: 0; overflow: hidden;">
    We've responded to your inquiry at Windsor Residence
  </div>
  
  <!-- Outer Wrapper -->
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #F5F3FF;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        
        <!-- Main Container Card -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: #FFFFFF; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); overflow: hidden;">
          
          <!-- Header Section -->
          <tr>
            <td style="background: linear-gradient(135deg, #5B21B6 0%, #7C3AED 100%); padding: 32px 40px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #FFFFFF; letter-spacing: -0.5px;">
                Windsor Residence
              </h1>
              <p style="margin: 8px 0 0 0; font-size: 14px; color: rgba(255,255,255,0.85);">
                We've responded to your inquiry
              </p>
            </td>
          </tr>
          
          <!-- Content Section -->
          <tr>
            <td style="padding: 40px;">
              
              <!-- Greeting -->
              <p style="margin: 0 0 24px 0; font-size: 18px; font-weight: 600; color: #1F2937;">
                Hello ${inquirerName},
              </p>
              
              <!-- Message Intro -->
              <p style="margin: 0 0 24px 0; font-size: 15px; color: #6B7280; line-height: 1.6;">
                Thank you for reaching out to Windsor Residence. We have reviewed your inquiry and here is our response:
              </p>
              
              <!-- Reply Card -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #F5F3FF; border-radius: 12px; border-left: 4px solid #7C3AED; margin-bottom: 32px;">
                <tr>
                  <td style="padding: 20px 24px;">
                    <p style="margin: 0; font-size: 15px; color: #1F2937; line-height: 1.7; white-space: pre-wrap;">
${replyMessage}
                    </p>
                  </td>
                </tr>
              </table>
              
              <!-- Closing Text -->
              <p style="margin: 0 0 32px 0; font-size: 15px; color: #6B7280; line-height: 1.6;">
                If you have any further questions, please don't hesitate to reach out. We're here to help!
              </p>
              
              <!-- Divider -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 32px;">
                <tr>
                  <td style="border-top: 1px solid #E5E7EB; padding-top: 24px;">
                    <p style="margin: 0; font-size: 15px; font-weight: 600; color: #1F2937;">
                      Best regards,
                    </p>
                    <p style="margin: 4px 0 0 0; font-size: 15px; font-weight: 700; color: #5B21B6;">
                      Windsor Residence Team
                    </p>
                  </td>
                </tr>
              </table>
              
            </td>
          </tr>
          
          <!-- Footer Section -->
          <tr>
            <td style="background-color: #F9FAFB; padding: 24px 40px; text-align: center; border-top: 1px solid #E5E7EB;">
              <p style="margin: 0 0 8px 0; font-size: 13px; color: #9CA3AF;">
                This is an automated message. Please do not reply directly to this email.
              </p>
              <p style="margin: 0; font-size: 12px; color: #D1D5DB;">
                © 2024 Windsor Residence. All rights reserved.
              </p>
            </td>
          </tr>
          
        </table>
        <!-- End Main Card -->
        
        <!-- Spacer -->
        <div style="height: 24px;"></div>
        
      </td>
    </tr>
  </table>
  <!-- End Outer Wrapper -->

</body>
</html>
  `.trim();

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: inquirerEmail,
      subject,
      text,
      html,
    });

    if (error) {
      console.error('Failed to send reply notification email:', error);
      return false;
    }

    console.log(`📧 Reply notification sent to inquirer: ${inquirerEmail}`);
    return true;
  } catch (error) {
    console.error('Failed to send reply notification email:', error.message);
    return false;
  }
}

export default {
  sendInquiryNotificationToAdmin,
  sendReplyNotificationToInquirer,
};
