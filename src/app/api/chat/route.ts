import { Configuration, OpenAIApi } from "openai-edge"
import { OpenAIStream, StreamingTextResponse } from "ai"

export const runtime = 'edge'

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config);

export async function POST(request: Request){
    const{ messages } = await request.json()

    console.log(messages);

    const response = await openai.createChatCompletion({

        model: 'gpt-3.5-turbo',
        stream: true,
        messages: [
        {role:"system", content: 'You are an AI teacher of history of Kazakhstan on the website called Tarih. Answer any questions related to the hisory of Kazakhstan. Kerey is the first khan of Kazakh Khanate.'},
            ...messages
        ],
        max_tokens: 600,
    })
    const stream = await OpenAIStream(response);

    return new StreamingTextResponse(stream);
}