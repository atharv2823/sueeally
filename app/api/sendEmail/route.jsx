// //this send the mail to the user

// import nodemailer from "nodemailer";

// export async function POST(req) {
//     try {
//         const { to, subject, text } = await req.json();
//         console.log("subject",subject)

//         if (!to || !subject || !text) {
//             return new Response(JSON.stringify({ error: "Missing required fields" }), {
//                 status: 400,
//                 headers: { "Content-Type": "application/json" },
//             });
//         }

//         let transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user:"atharvneware28@gmail.com",
//                 pass: "dpxf hwcg xgud nays",
//             },
//         });

//         let mailOptions = {
//             from: "atharvneware28@gmail.com",
//             to,
//             subject,
//             text,
//         };

//         let info = await transporter.sendMail(mailOptions);

//         return new Response(JSON.stringify({ message: "Email sent successfully", info }), {
//             status: 200,
//             headers: { "Content-Type": "application/json" },
//         });
//     } catch (error) {
//         return new Response(JSON.stringify({ error: error.message }), {
//             status: 500,
//             headers: { "Content-Type": "application/json" },
//         });
//     }
// }




import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { from, subject, text } = await req.json();

    if (!from || !subject || !text) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user:"atharvneware28@gmail.com",
        pass: "dpxf hwcg xgud nays",
      },
    });

    let mailOptions = {
      from, // User's entered email
      to: "atharvneware28@gmail.com", // Owner's email (who receives the mail)
      subject,
      text,
    };

    let info = await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully", info }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
