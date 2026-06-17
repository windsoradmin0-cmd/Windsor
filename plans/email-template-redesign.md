# Email Template Redesign - Windsor Residence

## Overview

Modernizing the inquiry reply email template with a card-based layout, improved typography, and a cohesive color scheme.

---

## Current Template

Simple HTML with basic structure, inline logo, plain text message area, and signature.

---

## New Design Specifications

### Color Palette

| Role            | Color                     | Usage                              |
| --------------- | ------------------------- | ---------------------------------- |
| Primary         | `#5B21B6` (Deep Purple)   | Header background, accent elements |
| Secondary       | `#7C3AED` (Violet)        | Buttons, highlights                |
| Accent          | `#A78BFA` (Light Purple)  | Borders, subtle accents            |
| Background      | `#F5F3FF` (Lavender Mist) | Page background                    |
| Card Background | `#FFFFFF`                 | Content cards                      |
| Text Primary    | `#1F2937` (Dark Gray)     | Main text                          |
| Text Secondary  | `#6B7280` (Medium Gray)   | Supporting text                    |
| Success Accent  | `#10B981` (Emerald)       | Icon accents                       |

### Typography

- **Headings**: System font stack (Segoe UI, Helvetica Neue, Arial)
- **Body**: 16px base size, 1.6 line-height
- **Message text**: 15px for readability

---

## Modernized Email Template (EmailJS)

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Windsor Residence</title>
    <!--[if mso]>
      <style type="text/css">
        table {
          border-collapse: collapse;
        }
        .button {
          padding: 12px 24px !important;
        }
      </style>
    <![endif]-->
  </head>
  <body
    style="margin: 0; padding: 0; background-color: #F5F3FF; font-family: 'Segoe UI', Helvetica Neue, Arial, sans-serif;"
  >
    <!-- Preview Text (hidden) -->
    <div style="display: none; max-height: 0; overflow: hidden;">
      We've responded to your inquiry at Windsor Residence
    </div>

    <!-- Outer Wrapper -->
    <table
      role="presentation"
      width="100%"
      cellspacing="0"
      cellpadding="0"
      border="0"
      style="background-color: #F5F3FF;"
    >
      <tr>
        <td align="center" style="padding: 40px 20px;">
          <!-- Main Container Card -->
          <table
            role="presentation"
            width="100%"
            cellspacing="0"
            cellpadding="0"
            border="0"
            style="max-width: 600px; background-color: #FFFFFF; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); overflow: hidden;"
          >
            <!-- Header Section -->
            <tr>
              <td
                style="background: linear-gradient(135deg, #5B21B6 0%, #7C3AED 100%); padding: 32px 40px; text-align: center;"
              >
                <!-- Logo -->
                <table
                  role="presentation"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  style="margin: 0 auto 16px auto;"
                >
                  <tr>
                    <td
                      style="padding: 8px 16px; background-color: rgba(255,255,255,0.15); border-radius: 8px;"
                    >
                      <img
                        src="https://windsor.example.com/logo.png"
                        alt="🏠"
                        width="48"
                        height="48"
                        style="display: block; border: 0;"
                      />
                    </td>
                  </tr>
                </table>
                <h1
                  style="margin: 0; font-size: 24px; font-weight: 700; color: #FFFFFF; letter-spacing: -0.5px;"
                >
                  Windsor Residence
                </h1>
                <p
                  style="margin: 8px 0 0 0; font-size: 14px; color: rgba(255,255,255,0.85);"
                >
                  We've responded to your inquiry
                </p>
              </td>
            </tr>

            <!-- Content Section -->
            <tr>
              <td style="padding: 40px;">
                <!-- Greeting -->
                <p
                  style="margin: 0 0 24px 0; font-size: 18px; font-weight: 600; color: #1F2937;"
                >
                  Hello {{inquirer_name}},
                </p>

                <!-- Message Intro -->
                <p
                  style="margin: 0 0 24px 0; font-size: 15px; color: #6B7280; line-height: 1.6;"
                >
                  Thank you for reaching out to Windsor Residence. We have
                  reviewed your inquiry and here is our response:
                </p>

                <!-- Reply Card -->
                <table
                  role="presentation"
                  width="100%"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  style="background-color: #F5F3FF; border-radius: 12px; border-left: 4px solid #7C3AED; margin-bottom: 32px;"
                >
                  <tr>
                    <td style="padding: 20px 24px;">
                      <p
                        style="margin: 0; font-size: 15px; color: #1F2937; line-height: 1.7; white-space: pre-wrap;"
                      >
                        {{reply_message}}
                      </p>
                    </td>
                  </tr>
                </table>

                <!-- Closing Text -->
                <p
                  style="margin: 0 0 32px 0; font-size: 15px; color: #6B7280; line-height: 1.6;"
                >
                  If you have any further questions, please don't hesitate to
                  reach out. We're here to help!
                </p>

                <!-- Divider -->
                <table
                  role="presentation"
                  width="100%"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  style="margin-bottom: 32px;"
                >
                  <tr>
                    <td
                      style="border-top: 1px solid #E5E7EB; padding-top: 24px;"
                    >
                      <p
                        style="margin: 0; font-size: 15px; font-weight: 600; color: #1F2937;"
                      >
                        Best regards,
                      </p>
                      <p
                        style="margin: 4px 0 0 0; font-size: 15px; font-weight: 700; color: #5B21B6;"
                      >
                        Windsor Residence Team
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer Section -->
            <tr>
              <td
                style="background-color: #F9FAFB; padding: 24px 40px; text-align: center; border-top: 1px solid #E5E7EB;"
              >
                <p style="margin: 0 0 8px 0; font-size: 13px; color: #9CA3AF;">
                  This is an automated message. Please do not reply directly to
                  this email.
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
```

---

## Resend Alternative Template (Server-Side)

If you prefer to use the server-side Resend implementation instead of EmailJS, update [`server/src/utils/email.js`](server/src/utils/email.js:130):

```javascript
const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Windsor Residence</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F5F3FF; font-family: 'Segoe UI', Helvetica Neue, Arial, sans-serif;">
  
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #F5F3FF;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: #FFFFFF; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); overflow: hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #5B21B6 0%, #7C3AED 100%); padding: 32px 40px; text-align: center;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #FFFFFF; letter-spacing: -0.5px;">Windsor Residence</h1>
              <p style="margin: 8px 0 0 0; font-size: 14px; color: rgba(255,255,255,0.85);">We've responded to your inquiry</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 24px 0; font-size: 18px; font-weight: 600; color: #1F2937;">Hello ${inquirerName},</p>
              <p style="margin: 0 0 24px 0; font-size: 15px; color: #6B7280; line-height: 1.6;">Thank you for reaching out to Windsor Residence. We have reviewed your inquiry and here is our response:</p>
              
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #F5F3FF; border-radius: 12px; border-left: 4px solid #7C3AED; margin-bottom: 32px;">
                <tr>
                  <td style="padding: 20px 24px;">
                    <p style="margin: 0; font-size: 15px; color: #1F2937; line-height: 1.7; white-space: pre-wrap;">${replyMessage}</p>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 0 0 32px 0; font-size: 15px; color: #6B7280; line-height: 1.6;">If you have any further questions, please don't hesitate to reach out. We're here to help!</p>
              
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 32px;">
                <tr>
                  <td style="border-top: 1px solid #E5E7EB; padding-top: 24px;">
                    <p style="margin: 0; font-size: 15px; font-weight: 600; color: #1F2937;">Best regards,</p>
                    <p style="margin: 4px 0 0 0; font-size: 15px; font-weight: 700; color: #5B21B6;">Windsor Residence Team</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #F9FAFB; padding: 24px 40px; text-align: center; border-top: 1px solid #E5E7EB;">
              <p style="margin: 0 0 8px 0; font-size: 13px; color: #9CA3AF;">This is an automated message. Please do not reply directly to this email.</p>
              <p style="margin: 0; font-size: 12px; color: #D1D5DB;">© 2024 Windsor Residence. All rights reserved.</p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>

</body>
</html>
`.trim();
```

---

## Implementation Options

### Option 1: Update EmailJS Template (Dashboard)

1. Log in to [EmailJS Dashboard](https://emailjs.com)
2. Navigate to **Email Templates** → Select `template_pgv0ca9`
3. Replace the entire template content with the HTML above
4. Save changes

### Option 2: Switch to Resend (Server-Side)

Update [`server/src/utils/email.js`](server/src/utils/email.js:130) with the Resend template code above. Benefits:

- Version control over email templates
- No need to manually update in EmailJS dashboard
- More consistent deployment process

---

## Visual Preview

```
┌────────────────────────────────────────┐
│  ┌──────────────────────────────────┐  │
│  │  🏠  Windsor Residence           │  │
│  │     We've responded to inquiry   │  │
│  └──────────────────────────────────┘  │
│                                        │
│  Hello John,                           │
│                                        │
│  Thank you for reaching out...         │
│                                        │
│  ┌──────────────────────────────────┐  │
│  │ ┃                                │  │
│  │ ┃  Reply message displayed      │  │
│  │ ┃  here in a styled card with    │  │
│  │ ┃  purple left border accent     │  │
│  │ ┃                                │  │
│  └──────────────────────────────────┘  │
│                                        │
│  If you have any questions...          │
│                                        │
│  Best regards,                         │
│  Windsor Residence Team               │
│                                        │
│  ─────────────────────────────────     │
│  This is an automated message...       │
│  © 2024 Windsor Residence              │
└────────────────────────────────────────┘
```

---

## Checklist

- [ ] Choose implementation option (EmailJS dashboard OR Resend server-side)
- [ ] Replace template content
- [ ] Test with a sample inquiry reply
- [ ] Verify rendering in various email clients (Gmail, Outlook, Apple Mail)
