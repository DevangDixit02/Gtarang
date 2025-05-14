import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { name, email, company, phone, service, message } = formData;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields' },
        { status: 400 }
      );
    }

    console.log('Setting up transporter with Gmail credentials');
    
    // Create a nodemailer transporter for Gmail
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Boolean(process.env.SMTP_SECURE === 'true'),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email to the company with form details
    const companyMailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service Interested In:</strong> ${service || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Email to the customer as confirmation
    const customerMailOptions = {
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Thank you for contacting GTarang Energy',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #003366; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">GTarang Energy</h1>
          </div>
          <div style="padding: 20px; border: 1px solid #e0e0e0; border-top: none;">
            <h2>Thank You for Reaching Out!</h2>
            <p>Dear ${name},</p>
            <p>Thank you for contacting GTarang Energy. We have received your message and our team will review it promptly.</p>
            <p>We typically respond to inquiries within 24 hours during business days.</p>
            <p>Here's a summary of the information you provided:</p>
            <ul>
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
              ${company ? `<li><strong>Company:</strong> ${company}</li>` : ''}
              ${service ? `<li><strong>Service Interested In:</strong> ${service}</li>` : ''}
            </ul>
            <p>If you need immediate assistance, please call us at +91 98765 43210.</p>
            <p>Best regards,<br>The GTarang Energy Team</p>
          </div>
          <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #666;">
            <p>© ${new Date().getFullYear()} GTarang Energy. All rights reserved.</p>
            <p>412, Pinnacle Business Park, Baner Road, Pune, Maharashtra 411045, India</p>
          </div>
        </div>
      `,
    };

    console.log('Attempting to send emails via Gmail...');
    
    try {
      // First, send the company notification
      const companyResult = await transporter.sendMail(companyMailOptions);
      console.log('Company email sent:', companyResult.response);
      
      // Then, send the customer confirmation
      const customerResult = await transporter.sendMail(customerMailOptions);
      console.log('Customer email sent:', customerResult.response);
      
      return NextResponse.json({ success: true });
    } catch (emailError: any) {
      console.error('Failed to send emails. Error details:', emailError);
      return NextResponse.json(
        { error: 'Failed to send email', details: emailError.message },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process the contact form submission', details: error.message },
      { status: 500 }
    );
  }
} 