import { ConfigService } from '@nestjs/config';
import { Redis } from 'ioredis';
import { AddParticipantRepositoryData, CreatePollRepositoryData } from './types';
import { Poll } from '../../../shared/poll-types';
export declare class PollsRepository {
    private readonly redisClient;
    private readonly ttl;
    private readonly logger;
    constructor(configService: ConfigService, redisClient: Redis);
    createPoll({ votesPerVoter, topic, pollID, userID, }: CreatePollRepositoryData): Promise<Poll>;
    getPoll(pollID: string): Promise<Poll>;
    addParticipant({ pollID, userID, name, }: AddParticipantRepositoryData): Promise<Poll>;
}
