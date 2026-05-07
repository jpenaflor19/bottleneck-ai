export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed',
    });
  }

  try {
    const { prompt, module } = req.body;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content:
              'You are an expert AI marketing assistant for Bottleneck Distant Assistants specializing in recruitment marketing, delegation systems, social media growth, and business branding.',
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

    console.log('OPENAI RESPONSE:', data);

    if (!response.ok) {
      return res.status(500).json({
        error: data.error?.message || 'OpenAI request failed',
      });
    }

    return res.status(200).json({
      result: data.choices[0].message.content,
    });
  } catch (error) {
    console.error('SERVER ERROR:', error);

    return res.status(500).json({
      error: error.message,
    });
  }
}