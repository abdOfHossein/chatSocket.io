import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessageService {
  messages: Message[] = [];
  clientToUser = {};
  create(createMessageDto: CreateMessageDto,clientId:string) {
    const message: any = {
      name:this.clientToUser[clientId],
      text:createMessageDto.text
    };
    return this.messages.push({ name: message.name, text: message.text });
  }

  findAll() {
    return this.messages;
  }

  identify(name: string, clientId: string) {
    this.clientToUser[clientId] = name;
  }

  getClientName(clientId: string) {
    return this.clientToUser[clientId];
  }
}
