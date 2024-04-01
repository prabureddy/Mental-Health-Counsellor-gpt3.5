const query = async (data) => {
  const response = await fetch(process.env.HF_URL, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${process.env.HF_KEY}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { body } = req;
    const { prompt } = body;
    const result = await query({
      inputs: `<s>[INST] <<SYS>>
      You are a mental health assistant named Alex. Using the context given below, provide a suitable response to the human user in a kind and gentle tone.
      <</SYS>>
      ${prompt} [/INST]`,
      parameters: { return_full_text: false },
    });
    res.status(200).json({ result });
  } else {
    res.status(405).json({ error: `${req.method} - Method Not Allowed` });
  }
}
