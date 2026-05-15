import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  const { name, email, url, message } = await request.json();

  if (!name || !email || !message) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"${name}" <${process.env.GMAIL_USER}>`,
    to: 'jashanvirdi12@gmail.com',
    replyTo: email,
    subject: `New enquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nWebsite: ${url || 'Not provided'}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px">
        <h2 style="margin-bottom:4px">New enquiry</h2>
        <p style="color:#666;margin-top:0">via jashansinghvirdi.com</p>
        <table style="width:100%;border-collapse:collapse;margin-bottom:16px">
          <tr><td style="padding:6px 0;color:#999;width:80px">Name</td><td style="padding:6px 0">${name}</td></tr>
          <tr><td style="padding:6px 0;color:#999">Email</td><td style="padding:6px 0"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:6px 0;color:#999">Website</td><td style="padding:6px 0">${url || '—'}</td></tr>
        </table>
        <div style="background:#f5f5f5;padding:16px;border-radius:8px;white-space:pre-wrap">${message}</div>
      </div>
    `,
  });

  return Response.json({ success: true });
}
