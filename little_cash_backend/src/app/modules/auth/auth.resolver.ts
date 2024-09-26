import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthResponse } from './dtos/login/login-response.dto';
import { LoginDto } from './dtos/login/login.dto';
import { CreateUserDto } from './dtos/create-user/create-user.dto';
import { AuthServiceContract } from 'src/app/contracts/auth/auth-service.contract';
import { Inject } from '@nestjs/common';

@Resolver()
export class AuthResolver {
  constructor(
    @Inject(AuthServiceContract)
    private readonly authService: AuthServiceContract,
  ) {}

  @Mutation(() => String, { nullable: true })
  async createUser(
    @Args('createUserDto') createUserDto: CreateUserDto,
  ): Promise<void> {
    await this.authService.createUser(createUserDto);
  }

  @Mutation(() => AuthResponse)
  async login(@Args('loginDto') loginDto: LoginDto): Promise<AuthResponse> {
    return this.authService.login(loginDto);
  }
}
