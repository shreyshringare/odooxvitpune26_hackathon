import express from 'express';

const router = express.Router();

/**
 * POST /api/chat
 * Proxies user messages to Google Gemini API and returns the response.
 * Body: { message: string, history?: Array<{role, parts}> }
 */
router.post('/', async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'GEMINI_API_KEY not configured on the server' });
    }

    // Build the conversation for Gemini
    const contents = [
      // System-like instruction as the first user turn
      {
        role: 'user',
        parts: [{ text: 'You are XpenseFlow AI Assistant — a helpful, concise chatbot for an enterprise expense management platform. Help users with expense submission, approval workflows, policy questions, and general navigation. Keep responses short and practical. Use bullet points when listing steps.' }]
      },
      {
        role: 'model',
        parts: [{ text: 'Understood! I\'m XpenseFlow AI Assistant. I can help you with:\n• Submitting and tracking expenses\n• Understanding approval workflows\n• Expense policy questions\n• Navigating the platform\n\nHow can I help you today?' }]
      },
      // Existing conversation history
      ...history,
      // Current user message
      {
        role: 'user',
        parts: [{ text: message }]
      }
    ];

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const geminiRes = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 512,
        },
      }),
    });

    if (!geminiRes.ok) {
      const errBody = await geminiRes.text();
      console.error('Gemini API error:', errBody);
      return res.status(502).json({ error: 'Gemini API request failed', details: errBody });
    }

    const data = await geminiRes.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I couldn\'t generate a response.';

    return res.json({ success: true, reply });

  } catch (error) {
    console.error('Chat endpoint error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
