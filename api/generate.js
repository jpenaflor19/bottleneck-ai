export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt, module } = req.body;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4.1-mini',
        messages: [
          {
            role: 'system',
            content:
              'You are an AI marketing assistant for Bottleneck Distant Assistants specializing in recruitment marketing, delegation systems, social media growth, and authority branding.',
          },
          {
            role: 'user',
            content: `Module: ${module}\n\nTask: ${prompt}`,
          },
        ],
        temperature: 0.8,
      }),
    });

    const data = await response.json();

    res.status(200).json({
      result: data.choices[0].message.content,
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to generate content.',
    });
  }
}