import { Injectable } from '@nestjs/common';
import { createTransport, Transporter } from 'nodemailer';

@Injectable()
export class EmailService {
  transporter: Transporter;

  constructor() {
    this.transporter = createTransport({
      host: 'smtp.163.com',
      port: 465,
      secure: true,
      auth: {
        user: 'turneratc@163.com',
        pass: 'DYiVrtNguMCkWXXp',
      },
    });
  }

  async sendMail({ to, subject, html }) {
    await this.transporter.sendMail({
      from: {
        name: '聊天室',
        address: 'turneratc@163.com',
      },
      to,
      subject,
      html,
    });
  }
}
