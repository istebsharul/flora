import { NextRequest, NextResponse } from "next/server";
import { transporter, mailOptions } from '../../../utils/nodemailer';

type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export async function POST(req: NextRequest) {
    if (req.method === 'POST') {
        const body = await req.json();
        const data: FormData = body;

        try {
            const message = `
                Name: ${data.name}
                Email: ${data.email}
                Phone: ${data.phone}
                Message: ${data.message}
            `

            await transporter.sendMail({
                ...mailOptions,
                from: `${data.email}`,
                subject: 'New Contact from website contact form',
                text: message
            });

            return NextResponse.json({ message: 'Email Sent Successfully' }, { status: 200 })
        } catch (error) {
            return NextResponse.json({ message: "Failed to Send Message", error }, { status: 500 })
        }
    } else {
        return NextResponse.json({ message: "Method Not Allowed!" }, { status: 405 })
    }
}