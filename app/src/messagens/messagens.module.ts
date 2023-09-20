import { Module } from '@nestjs/common';
import { MessagensService } from './messagens.service';
import { MessagensController } from './messagens.controller';

@Module({
  controllers: [MessagensController],
  providers: [MessagensService],
})
export class MessagensModule {}
