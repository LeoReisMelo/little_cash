import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dtos/login/login.dto';
import { AuthResponse } from './dtos/login/login-response.dto';
import { CreateUserDto } from './dtos/create-user/create-user.dto';
import { AuthServiceContract } from 'src/app/contracts/auth/auth-service.contract';
import { UsersRepositoryContract } from 'src/app/contracts/repositories/users-repository.contract';
import { Encryption } from 'src/app/infrastructure/utils/encryption';
import { Jwt } from 'src/app/infrastructure/utils/jwt';

@Injectable()
export class AuthService implements AuthServiceContract {
  constructor(
    @Inject(UsersRepositoryContract)
    private readonly userRepository: UsersRepositoryContract,
    private readonly encryption: Encryption,
    private readonly jwt: Jwt,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<void> {
    try {
      await this.userRepository.create({
        ...createUserDto,
        password: await this.encryption.hashPassword(createUserDto.password),
      });
    } catch (err: any) {
      throw err;
    }
  }

  async login(loginDto: LoginDto): Promise<AuthResponse> {
    try {
      const { username, password } = loginDto;

      const user = await this.userRepository.findByUsername(username);

      if (
        !user ||
        !(await this.encryption.comparePasswords(password, user.password))
      ) {
        throw new UnauthorizedException('Invalid credentials');
      }

      const accessToken = await this.jwt.generateToken({
        username: user.username,
        name: user.name,
        roles: user.roles,
        cpf: user.cpf,
        position: user.position,
      });

      return {
        access_token: accessToken,
        expires_in: '1d',
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          name: user.name,
          roles: user.roles,
        },
      };
    } catch (err: any) {
      throw err;
    }
  }
}
