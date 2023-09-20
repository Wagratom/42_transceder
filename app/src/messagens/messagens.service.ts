import { Injectable } from '@nestjs/common';
import { CreateMessagenDto } from './dto/create-messagen.dto';
import { UpdateMessagenDto } from './dto/update-messagen.dto';

@Injectable()
export class MessagensService {
  create(createMessagenDto: CreateMessagenDto) {
    return 'This action adds a new messagen';
  }

  findAll() {
    return `This action returns all messagens`;
  }

  findOne(id: number) {
    return `This action returns a #${id} messagen`;
  }

  update(id: number, updateMessagenDto: UpdateMessagenDto) {
    return `This action updates a #${id} messagen`;
  }

  remove(id: number) {
    return `This action removes a #${id} messagen`;
  }
}
