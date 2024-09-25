import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { AuthResponse } from './dtos/login-response.dto';

@Injectable()
export class AuthService {
  async login(loginDto: LoginDto): Promise<AuthResponse> {
    try {
      const { email, password } = loginDto;

      console.log(email, password);

      if (email) {
        throw new UnauthorizedException('Invalid credentials');
      }

      // Aqui você deve verificar as credenciasis do usuário no banco de dados
      // e comparar a senha (criptografada) usando bcrypt ou outra biblioteca

      // Exemplo de resposta
      return {
        access_token: 'seu_access_token_aqui',
        refresh_token: 'seu_refresh_token_aqui',

        roles: ['user'], // ou roles que o usuário possui
      };
    } catch (err: any) {
      throw err;
    }
  }
}
