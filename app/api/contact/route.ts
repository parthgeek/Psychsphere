// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dns from 'dns';
import { promisify } from 'util';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const resolveMx = promisify(dns.resolveMx);

// Validate the email domain has MX records (simple anti-typo / disposable check)
const validateEmailDomain = async (email: string): Promise<boolean> => {
  try {
    const domain = email.split('@')[1];
    if (!domain) return false;
    const mx = await resolveMx(domain);
    return Array.isArray(mx) && mx.length > 0;
  } catch (e) {
    console.warn('MX lookup failed', e);
    return false;
  }
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      message,
      phone,
      source = 'website', // e.g. 'about', 'main' — set from your front-end
    } = body ?? {};

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'name, email and message are required' }, { status: 400 });
    }

    // basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    const domainOk = await validateEmailDomain(email);
    if (!domainOk) {
      return NextResponse.json({ error: 'Please provide an email with a valid domain' }, { status: 400 });
    }

    // Create transporter using env vars (see .env)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: (process.env.SMTP_SECURE === 'true'), // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // keep this if using provider with self-signed certs; remove if not necessary
      },
    });

    // Admin / PsychSphere email (to you) - UPDATED
const adminHtml = `
  <h3>New contact form submission</h3>
  <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
  <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
  <p><strong>Preferred Service:</strong> ${body.preferredService || 'Not specified'}</p>
  <p><strong>Preferred Time:</strong> ${body.preferredTime || 'Not specified'}</p>
  <p><strong>Source:</strong> ${source}</p>
  <p><strong>Message:</strong></p>
  <div style="border-left:4px solid #eee; padding-left:12px">${message.replace(/\n/g, '<br/>')}</div>
  <hr/>
  <p>Delivered by PsychSphere site</p>
`;

// User confirmation email - UPDATED (without user's message)
const userHtml = `
  <p>Hi ${name.split(' ')[0] || name},</p>
  <p>Thanks for reaching out to PsychSphere — we received your message and will get back to you soon.</p>
  ${body.preferredService ? `<p><strong>Preferred Service:</strong> ${body.preferredService}</p>` : ''}
  ${body.preferredTime ? `<p><strong>Preferred Time:</strong> ${body.preferredTime}</p>` : ''}
  <p>We've received your inquiry and one of our team members will contact you within 24 hours to discuss your needs and schedule your session.</p>
  <p>If you need urgent help, please contact our helpline or email psychsphereorg@gmail.com.</p>
  <p>Warmly,<br/>PsychSphere Team</p>
`;

    // Send to PsychSphere (admin)
    await transporter.sendMail({
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: process.env.TO_EMAIL || process.env.SMTP_USER,
      subject: `New contact form from ${name} (${source})`,
      html: adminHtml,
    });

    // Send confirmation back to user
    await transporter.sendMail({
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: email,
      subject: `Thanks for contacting PsychSphere — we received your message`,
      html: userHtml,
    });

    // Optionally: store in your DB (Supabase) — see your demo route for reference.
    // You can insert here as you did for demo requests (supabaseAdmin...).
    // (Keep the DB insertion optional so email still goes through even if DB fails.)

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('contact POST error', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
