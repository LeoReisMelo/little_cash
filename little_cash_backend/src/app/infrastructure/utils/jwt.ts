import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { sign, verify } from 'jsonwebtoken';

@Injectable()
export class Jwt {
  constructor(private readonly configService: ConfigService) {}

  private readonly jwtSecret = this.configService.get<string>('JWT_SECRET_KEY');
  private readonly jwtExpiration = '1d';

  async generateToken(payload: any) {
    return sign(payload, this.jwtSecret, { expiresIn: this.jwtExpiration });
  }

  async verifyToken(token: string) {
    return verify(token, this.jwtSecret);
  }
}
