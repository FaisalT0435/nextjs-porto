// import { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';

import { NextResponse } from 'next/server';
import openai from '@/components/api/openai';

interface GenerateRequest {
    prompt: string;
  }
  
  export async function POST(request: Request) {
    const body: GenerateRequest = await request.json();
  
    if (!body.prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }
  
    try {
        const response = await openai.completions.create({
            model: "text-davinci-003",
            prompt: body.prompt,
            max_tokens: 150,
          });
  
          const completionText = response.choices[0].text;
        } catch (error) {
          console.error('Error:', error);
        }
  }


// Logika API untuk mendapatkan balasan dari chatbot
// const getChatResponse = async (message: string): Promise<string> => {
//   try {
//     // Ganti dengan API endpoint DeepSeek atau model AI lainnya
//     const response = await axios.post('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', {
//       prompt: message,
//       max_tokens: 150,
//     });

//     return response.data.choices[0].text.trim();
//   } catch (error) {
//     console.error('Error:', error);
//     throw new Error('Maaf, terjadi kesalahan.');
//   }
// };

// Handler untuk API route
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { message } = req.body;

//     try {
//       const reply = await getChatResponse(message);
//       res.status(200).json({ reply });
//     } catch (error) {
//       console.error('Error:', error);
//       res.status(500).json({ reply: 'Maaf, terjadi kesalahan.' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }