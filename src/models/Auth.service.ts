import { AUTH_TIMER } from '../lib/config';
import Errors, { Message, HttpCode } from '../lib/Errors';
import { Member } from '../lib/member';
import jwt from 'jsonwebtoken';

class AuthService {
  private readonly secretToken;

  constructor() {
    this.secretToken = process.env.SECRET_TOKEN as string;
  }

  public async createToken(payload: Member) {
    return new Promise((resolve, reject) => {
      const duration = `${AUTH_TIMER}h`;
      const plainPayload = (payload as any).toObject
        ? (payload as any).toObject()
        : payload;
      jwt.sign(
        { ...plainPayload },
        this.secretToken,
        {
          expiresIn: duration,
        },
        (err, token) => {
          if (err) {
            reject(
              new Errors(HttpCode.UNAUTHORIZED, Message.TOKEN_CREATION_FAILED)
            );
          } else resolve(token as string);
        }
      );
    });
  }

  public async checkAuth(token: string): Promise<Member> {
    const result: Member = (await jwt.verify(
      token,
      this.secretToken
    )) as Member;

    return result;
  }
}

export default AuthService;
