import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessagensService } from './messagens.service';
import { CreateMessagenDto } from './dto/create-messagen.dto';
import { UpdateMessagenDto } from './dto/update-messagen.dto';

@Controller('messagens')
export class MessagensController {
  constructor(private readonly messagensService: MessagensService) {}

  @Post()
  create(@Body() createMessagenDto: CreateMessagenDto) {
    return this.messagensService.create(createMessagenDto);
  }

  @Get()
  findAll() {
    return this.messagensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messagensService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMessagenDto: UpdateMessagenDto) {
    return this.messagensService.update(+id, updateMessagenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messagensService.remove(+id);
  }
}
