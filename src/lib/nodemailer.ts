import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
  },
});

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: EmailData) {
  const { name, email, subject, message } = data;

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL || "portfolio-fullstack-lovat.vercel.app@gmail.com",
    replyTo: email,
    subject: `Portfolio Contact: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #e6a817; border-bottom: 2px solid #e6a817; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin-top: 15px;">
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
        <p style="color: #999; font-size: 12px; margin-top: 20px;">
          Sent from portfolio-fullstack-lovat.vercel.app portfolio contact form
        </p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
}
