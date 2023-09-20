import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MessagensService } from './messagens.service';
import { CreateMessagenDto } from './dto/create-messagen.dto';
import { UpdateMessagenDto } from './dto/update-messagen.dto';

@Controller('messagens')
export class MessagensController {
	constructor(private readonly messagensService: MessagensService) { }

	@Post()
	create(@Body() createMessagenDto: CreateMessagenDto) {
		return this.messagensService.create(createMessagenDto);
	}

	@Get()
	async findAll(@Query('username1') username1: string, @Query('username2') username2: string) {
		const messages = await this.messagensService.findAll(username1, username2);
		return messages;
	}


	// @Get(':id')
	// findOne(@Param('id') id: string) {
	// 	return this.messagensService.findOne(+id);
	// }

	// @Patch(':id')
	// update(@Param('id') id: string, @Body() updateMessagenDto: UpdateMessagenDto) {
	// 	return this.messagensService.update(+id, updateMessagenDto);
	// }

	// @Delete(':id')
	// remove(@Param('id') id: string) {
	// 	return this.messagensService.remove(+id);
	// }
}
