import { Controller, Post, Get, Body } from "@nestjs/common";
import { ChatGateway } from "./chatapi.gateway";

@Controller('chat')
export class ChatController{
    constructor(private readonly chatGateway: ChatGateway){}


    @Post()
    sendChatMessage(@Body() data:any ): void{
        this.chatGateway.handleMessage(data);
    }

    @Get()
    getSet(): string{
        return "Hello"; 
    }

}