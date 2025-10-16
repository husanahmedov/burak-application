import {Member, MemberInput} from "../lib/member";
import MemberModel from '../schema/Member.model';
import Errors, {HttpCode, Message} from "../lib/Errors";
import {MemberType} from "../lib/enum/member.enum";

class MemberService {
    private readonly memberModel;

    constructor() {
        this.memberModel = MemberModel;
    }

    public async processSignup(input: MemberInput): Promise<Member> {
        const exists = await this.memberModel
            .findOne({ memberType: MemberType.RESTAURANT })
            .exec()
        if (exists) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED)
        try {
            const result = await this.memberModel.create(input);
            result.memberPassword = "";
            return result.toObject() as Member;
        } catch (error) {
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED)
        }
    }
}

export default MemberService;