"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollsService = void 0;
const common_1 = require("@nestjs/common");
const ids_1 = require("../ids");
let PollsService = exports.PollsService = class PollsService {
    async createPoll(fields) {
        const pollID = (0, ids_1.createPollID)();
        const userID = (0, ids_1.createUserID)();
        return Object.assign(Object.assign({}, fields), { userID,
            pollID });
    }
    async joinPoll(fields) {
        const userID = (0, ids_1.createUserID)();
        return Object.assign(Object.assign({}, fields), { userID });
    }
    async rejoinPoll(fields) {
        return fields;
    }
};
exports.PollsService = PollsService = __decorate([
    (0, common_1.Injectable)()
], PollsService);
//# sourceMappingURL=polls.service.js.map