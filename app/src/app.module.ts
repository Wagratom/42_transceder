import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagensModule } from './messagens/messagens.module';

@Module({
  imports: [MessagensModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
