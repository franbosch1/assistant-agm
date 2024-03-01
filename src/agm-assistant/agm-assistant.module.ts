import { Module } from '@nestjs/common';
import { AgmAssistantService } from './agm-assistant.service';
import { AgmAssistantController } from './agm-assistant.controller';

@Module({
  controllers: [AgmAssistantController],
  providers: [AgmAssistantService],
})
export class AgmAssistantModule {}
