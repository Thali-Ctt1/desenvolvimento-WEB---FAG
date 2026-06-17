import nodemailer from "nodemailer";

type SendEmailEvent = {
  body: string;
};

type SendEmailPayload = {
  nome: string;
  email: string;
  mensagem: string;
};

export const handler = async (event: SendEmailEvent) => {
  const { nome, email, mensagem } = JSON.parse(event.body) as SendEmailPayload;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Novo contato Lengua Viva",
    html: `
      <h2>Novo contato</h2>

      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensagem:</strong> ${mensagem}</p>
    `,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
    }),
  };
};