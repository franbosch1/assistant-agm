import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgmAssistantModule } from './agm-assistant/agm-assistant.module';

@Module({
  imports: [AgmAssistantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
