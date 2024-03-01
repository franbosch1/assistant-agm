import OpenAI from "openai";


interface Options {
    threadId: string;
    assistantId?: string;
}

export const createRunUseCase = async( openai: OpenAI, options: Options ) => {
    const { threadId, assistantId = 'asst_8GZ3849srEk2FnYpXsOvD46A' } = options;

    const run = await openai.beta.threads.runs.create( threadId, {
        assistant_id: assistantId,
        // instructions; // Sobre escribe el asistente
    })

    console.log({run})

    return run;
} 