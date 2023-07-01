import {Module} from "@nestjs/common";
import { ChatController } from "./chatapi.controller";
import { ChatGateway } from "./chatapi.gateway";

@Module({
    providers:[ChatGateway],
    controllers:[ChatController],
})
export class ChatModule{}