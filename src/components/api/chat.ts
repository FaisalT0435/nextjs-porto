import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';




export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { message } = req.body;

    try {
      // Ganti dengan API endpoint DeepSeek atau model AI lainnya
      const response = await axios.post('https://api.deepseek.com/v1/chat', {
        prompt: message,
        max_tokens: 150,
      });

      // Kirim balasan ke client
      res.status(200).json({ reply: response.data.choices[0].text.trim() });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ reply: 'Maaf, terjadi kesalahan.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}