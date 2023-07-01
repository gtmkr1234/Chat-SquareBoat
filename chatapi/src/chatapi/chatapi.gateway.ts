import {WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody} from "@nestjs/websockets";

import { Server } from "socket.io";

@WebSocketGateway()
export class ChatGateway{
    @WebSocketServer()
    server: Server;

    @SubscribeMessage('chatapi')
    handleMessage(@MessageBody() data: any):void{
        const {recipientId, message} = data;
        this.server.to(recipientId).emit('chatapi', message);
    }
}
