import { Body, Controller, Post } from '@nestjs/common';
import { AgmAssistantService } from './agm-assistant.service';
import { QuestionDto } from './dtos/question.dto';

@Controller('agm-assistant')
export class AgmAssistantController {
  constructor(private readonly agmAssistantService: AgmAssistantService) {}

  @Post('create-thread')
  async createThread() {
    return await this.agmAssistantService.createThread();
  }

  @Post('user-question')
  async userQuestion(
    @Body() QuestionDto: QuestionDto
  ) {
    return await this.agmAssistantService.userQuestion(QuestionDto)
  }
}
