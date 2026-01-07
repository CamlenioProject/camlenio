import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
const Gmail = process.env.Gmail;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const linkedin = formData.get('linkedin');
    const portfolio = formData.get('portfolio');
    const coverLetter = formData.get('coverLetter');
    const jobTitle = formData.get('job');
    const resumeEntry = formData.get('resume');

    const attachments = [];
    if (resumeEntry && resumeEntry instanceof File) {
      const buffer = Buffer.from(await resumeEntry.arrayBuffer());
      attachments.push({
        filename: resumeEntry.name,
        content: buffer
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASS, 
      },
    });

    const mailOptions = {
        from: process.env.SMTP_USER,
        to: Gmail,
        subject: `New Job Application: ${jobTitle} - ${firstName} ${lastName}`,
        html: `
          <h2>New Job Application for ${jobTitle}</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>LinkedIn:</strong> ${linkedin}</p>
          <p><strong>Portfolio:</strong> ${portfolio}</p>
          <h3>Cover Letter:</h3>
          <p style="white-space: pre-wrap;">${coverLetter}</p>
        `,
        attachments,
      };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Application sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send application', error: String(error) }, { status: 500 });
  }
}
