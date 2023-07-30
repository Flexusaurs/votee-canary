import {Body, Controller, Post} from '@nestjs/common';
import { CreatePollDto, JoinPollDto } from './dtos';
import {PollsService} from './polls.service';

@Controller('polls')
export class PollsController {
    constructor(private pollsService: PollsService){}

    @Post()
    async create(@Body() CreatePollDto: CreatePollDto){
        const result = await this.pollsService.createPoll(CreatePollDto);

        return result;
    }

    @Post('/join')
    async join(@Body() JoinPollDto: JoinPollDto){
        const result = await this.pollsService.joinPoll(JoinPollDto);

        return result;
    }

    @Post('/rejoin')
    async rejoin(){
        const result = await this.pollsService.rejoinPoll({
            name: 'from tok',
            pollID: 'also from tok',
            userID: 'from tok lmao',
        });
        return result;
    }
}

