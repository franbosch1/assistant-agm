import { Injectable } from '@nestjs/common';

import OpenAI from 'openai';
import { createMessageUseCase, createRunUseCase, createThreadUseCase, checkCompleteStatusUseCase, getMessageListUseCase } from './use-cases';
import { QuestionDto } from './dtos/question.dto';

@Injectable()
export class AgmAssistantService {

    private openai = new OpenAI({
        apiKey: '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'
    });

    async createThread () {
        return await createThreadUseCase( this.openai )
    }

    async userQuestion( questionDto: QuestionDto) {

        const {threadId, question} = questionDto

        const message = await createMessageUseCase(this.openai, { threadId, question});

        const run = await createRunUseCase( this.openai, { threadId } );

        await checkCompleteStatusUseCase( this.openai, { runId: run.id, threadId: threadId })

        const messages = await getMessageListUseCase(this.openai, { threadId })

        return messages.reverse();
    }

} 
