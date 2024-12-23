
import { EmailTemplateComponent } from '../../../components/EmailTemplateComponent/EmailTemplate.component';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request): Promise<Response> {

    const body = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: 'Websero <onboarding@resend.dev>',
      to: ['webserocreations@gmail.com'],
      subject: `Email from ${body.userName}`,
      react: EmailTemplateComponent({ userName: body.userName || "empty", email: body.email || "empty", projectType: body.projectType || "empty", projectBudget: body.projectBudget || "empty" }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}


















// import { EmailTemplateComponent } from "../../../components/EmailTemplateComponent/EmailTemplate.component";
// import { Resend } from "resend";

// // Ensure the environment variable is properly typed and exists
// const resendApiKey = process.env.RESEND_API_KEY;
// if (!resendApiKey) {
//   throw new Error("RESEND_API_KEY is not defined in environment variables.");
// }
 


// const resend = new Resend(resendApiKey);

// interface EmailBody {
//   userName?: string;
//   email?: string;
//   projectType?: string;
//   projectBudget?: string;
// }

// export async function POST(req: Request): Promise<Response> {
//   try {
//     const body: EmailBody = await req.json();

//     const { data, error } = await resend.emails.send({
//       from: "Acme <onboarding@resend.dev>",
//       to: ["webserocreations@gmail.com"],
//       subject: `Email from ${body.userName}`,
//       react: EmailTemplateComponent({
//         userName: body.userName || "empty",
//         email: body.email || "empty",
//         projectType: body.projectType || "empty",
//         projectBudget: body.projectBudget || "empty",
//       }),
//     });

//     if (error) {
//       return new Response(JSON.stringify({ error }), { status: 500 });
//     }

//     return new Response(JSON.stringify(data), { status: 200 });
//   } catch (error: unknown) {
//     // Ensure error is properly handled as an object with a message
//     const errorMessage =
//       error instanceof Error ? error.message : "Unknown error occurred";
//     return new Response(JSON.stringify({ error: errorMessage }), {
//       status: 500,
//     });
//   }
// }
