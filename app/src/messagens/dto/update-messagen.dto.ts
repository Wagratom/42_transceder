import { PartialType } from '@nestjs/mapped-types';
import { CreateMessagenDto } from './create-messagen.dto';

export class UpdateMessagenDto extends PartialType(CreateMessagenDto) {}
