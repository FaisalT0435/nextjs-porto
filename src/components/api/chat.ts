// import { NextApiRequest, NextApiResponse } from 'next';
// import axios from 'axios';

const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://deepseek-v3.p.rapidapi.com/chat',
  headers: {
    'x-rapidapi-key': 'ddeccccccc2f7dbfp1sssssse2fg',
    'x-rapidapi-host': 'deepseek-v3.p.rapidapi.com',
    'Content-Type': 'application/json'
  }
};

export const fetchData = async (message: string) => {
    try {
      const response = await axios.request({
        ...options,
        data: { messages: [{ role: 'user', content: message }] },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching chat response:', error);
      return { messages: [{ content: 'Error retrieving response' }] };
    }
  };
  
  export default fetchData;

// import { NextResponse } from 'next/server';
// import openai from '@/components/api/openai';

// interface GenerateRequest {
//     prompt: string;
//   }
  
//   export async function POST(request: Request) {
//     const body: GenerateRequest = await request.json();
  
//     if (!body.prompt) {
//       return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
//     }
  
//     try {
//         const response = await openai.completions.create({
//             model: "text-davinci-003",
//             prompt: body.prompt,
//             max_tokens: 150,
//           });
  
//           const completionText = response.choices[0].text;
//         } catch (error) {
//           console.error('Error:', error);
//         }
//   }


// Logika API untuk mendapatkan balasan dari chatbot
// const getChatResponse = async (message: string): Promise<string> => {
//   try {
//     // Ganti dengan API endpoint DeepSeek atau model AI lainnya
//     const response = await axios.post('gg', {
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