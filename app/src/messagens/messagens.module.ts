import { Module } from '@nestjs/common';
import { MessagensService } from './messagens.service';
import { MessagensController } from './messagens.controller';
import { ManipulationDatabase } from './repository/manipulation.database';
import { PrismaService } from './database/prisma.service';

@Module({
  controllers: [MessagensController],
  providers: [MessagensService, ManipulationDatabase, PrismaService],
})
export class MessagensModule {}
