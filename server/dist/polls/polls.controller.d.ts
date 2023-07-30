import { CreatePollDto, JoinPollDto } from './dtos';
import { PollsService } from './polls.service';
export declare class PollsController {
    private pollsService;
    constructor(pollsService: PollsService);
    create(CreatePollDto: CreatePollDto): Promise<{
        userID: string;
        pollID: string;
        topic: string;
        votesPerVoter: number;
        name: string;
    }>;
    join(JoinPollDto: JoinPollDto): Promise<{
        userID: string;
        pollID: string;
        name: string;
    }>;
    rejoin(): Promise<import("./types").RejoinPollFields>;
}
