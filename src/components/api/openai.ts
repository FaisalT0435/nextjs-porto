import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'xxx', // defaults to process.env["OPENAI_API_KEY"]
});


export default openai;