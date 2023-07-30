import { CreatePollFields, JoinPollFields, RejoinPollFields } from './types';
export declare class PollsService {
    createPoll(fields: CreatePollFields): Promise<{
        userID: string;
        pollID: string;
        topic: string;
        votesPerVoter: number;
        name: string;
    }>;
    joinPoll(fields: JoinPollFields): Promise<{
        userID: string;
        pollID: string;
        name: string;
    }>;
    rejoinPoll(fields: RejoinPollFields): Promise<RejoinPollFields>;
}
