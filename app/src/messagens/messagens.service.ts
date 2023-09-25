import { Injectable } from '@nestjs/common';
import { CreateMessagenDto } from './dto/create-messagen.dto';
import { UpdateMessagenDto } from './dto/update-messagen.dto';
import { ManipulationDatabase } from './repository/manipulation.database';
import { PrismaService } from './database/prisma.service';

@Injectable()
export class MessagensService {
	// constructor(private manipulationDatabase: ManipulationDatabase) { }
	constructor(private prismaService: PrismaService) {}

	//##########################################################################
	//      Bloco de codigo para Criar um novo chat ou adicionar uma mensagem  #
	//##########################################################################
	async getChat(username1: string, username2: string) {
		const key = username1 + username2;

		const chat = await this.prismaService.privateChat.findUnique({
			where: { stringKey: key },
		});
		return chat;
	}

	async createNewChat(username1: string, username2: string) {
		const key = username1 + username2;

		const newChat = await this.prismaService.privateChat.create({
			data: { stringKey: key },
		});
		return newChat;
	}

	async addMessageToChat(createMessageDto: CreateMessagenDto, chatId: number) {
		await this.prismaService.messagens.create({
			data: {
				username: createMessageDto.username1,
				message: createMessageDto.messagen,
				author: { connect: { id: chatId } },
			},
		});
	}

	async addNewMessage(createMessageDto: CreateMessagenDto) {
		const chat = await this.getChat(
			createMessageDto.username1,
			createMessageDto.username2
		);

		if (chat) {
			await this.addMessageToChat(createMessageDto, chat.id);
		}
		else {
			const newChat = await this.createNewChat(
				createMessageDto.username1,
				createMessageDto.username2
			);
			await this.addMessageToChat(createMessageDto, newChat.id);
		}
	}

	create(createMessagenDto: CreateMessagenDto) {
		return this.addNewMessage(createMessagenDto)
	}


	//##########################################################################
	//      Bloco de codigo para obter todos os chats e mensagens de um chat   #
	//##########################################################################
	async getAllMessagesInChat(username1: string, username2: string) {
		const chat = await this.getChat(username1, username2);

		if (!chat) {
			return [];
		}

		const messages = await this.prismaService.messagens.findMany({
			where: {
				authorId: chat.id,
			},
			orderBy: {
				data: 'asc', // Ou 'desc' se você quiser ordenar do mais recente ao mais antigo.
			},
		});
		return messages;
	}

	findAll(username1: string, username2: string) {
		return this.getAllMessagesInChat(
			username1,
			username2
		)
	}

	// findOne(id: number) {
	// 	return `This action returns a #${id} messagen`;
	// }

	// update(id: number, updateMessagenDto: UpdateMessagenDto) {
	// 	return `This action updates a #${id} messagen`;
	// }

	// remove(id: number) {
	// 	return `This action removes a #${id} messagen`;
	// }
}
