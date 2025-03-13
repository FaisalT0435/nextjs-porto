import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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', // defaults to process.env["OPENAI_API_KEY"]
});


export default openai;