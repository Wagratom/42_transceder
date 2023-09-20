import { IsString } from "class-validator";

export class CreateMessageDto {
	@IsString()
	username1: String;

	@IsString()
	username2: String;

	@IsString()
	message:   String;
	data:      String;
}
