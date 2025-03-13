import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: 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,
});

const openai = new OpenAIApi(configuration);

export default openai;