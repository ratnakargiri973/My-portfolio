import nodemailer from 'nodemailer';
import 'dotenv/config';

const userEmail = process.env.USER_EMAIL;
const userPassword = process.env.USER_PASSWORD;

const createEmailTransporter = () => {
    return nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: userEmail,
            pass: userPassword
        },
    });
}

export const sendingEmail = async (req, res) => {
    const { name, email, message } = req.body;

    const ContactMessage = `
     Dear ${name},

     Thank you so much for getting in touch with me through my portfolio website. I’ve received your message and truly appreciate your interest.

     Here’s what you shared:
     - Name: ${name}
     - Email: ${email}
     - Message: ${message}

     I’ll review your message and respond as soon as possible. If it's urgent, feel free to reach out directly at ${userEmail}.

     Thanks again, and I look forward to connecting with you!

     Best regards,  
     Ratnakar Giri
     `;

    const OwnerNotification = `
    Hey Ratnakar,

    You've received a new message from your portfolio site!

    Name: ${name}
    Email: ${email}
    Message: ${message}

    Don't forget to reply soon 😄
    `;

    try {
        const transporter = createEmailTransporter();

        // 1. Send thank-you email to the client
        await transporter.sendMail({
            from: userEmail,
            to: email,
            subject: `Thank you for contacting me, ${name}!`,
            text: ContactMessage,
            html: `
                <p>Dear <strong>${name}</strong>,</p>
                <p>Thank you so much for reaching out through my portfolio website! I’ve received your message and truly appreciate your interest.</p>
                <p><strong>Here’s what you shared:</strong></p>
                <ul>
                  <li><strong>Name:</strong> ${name}</li>
                  <li><strong>Email:</strong> ${email}</li>
                  <li><strong>Message:</strong> ${message}</li>
                </ul>
                <p>I’ll review your message and respond as soon as I can. For urgent matters, feel free to contact me directly at <a href="mailto:${userEmail}">${userEmail}</a>.</p>
                <p>Thanks again, and I look forward to connecting with you!</p>
                <p>Best regards,<br><strong>Ratnakar Giri</strong></p>
            `,
        });

        // 2. Send notification to yourself
        await transporter.sendMail({
            from: userEmail,
            to: userEmail,
            subject: `📬 New Portfolio Contact from ${name}`,
            text: OwnerNotification,
        });

        res.status(200).json({ message: 'Thank you email sent successfully!' });

    } catch (error) {
        console.error('Error sending emails:', error);
        res.status(500).json({ error: 'Failed to send thank you email.' });
    }
}
