// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { OpenAI } from "openai";

const openai = new OpenAI({
  organization: "org-EYj0pavhRG82Sw5VjhfQ4ga0",
  apiKey: process.env.OPENAI_API_KEY,
});

function getCounselling(prompt) {
  return new Promise(async (res) => {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `You are mental health counselor and one of your patient is asking you this question: \n\n\n ${prompt} \n\n\n What should you tell them?`,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    res(response.choices[0]?.message?.content);
  });
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { body } = req;
    const { prompt } = body;
    const result = await getCounselling(prompt);
    res.status(200).json({ result });
  } else {
    res.status(405).json({ error: `${req.method} - Method Not Allowed` });
  }
}
