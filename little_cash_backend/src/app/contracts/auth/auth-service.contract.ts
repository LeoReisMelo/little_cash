import { CreateUserDto } from 'src/app/modules/auth/dtos/create-user/create-user.dto';
import { AuthResponse } from 'src/app/modules/auth/dtos/login/login-response.dto';
import { LoginDto } from 'src/app/modules/auth/dtos/login/login.dto';

export interface AuthServiceContract {
  createUser(createUserDto: CreateUserDto): Promise<void>;
  login(loginDto: LoginDto): Promise<AuthResponse>;
}

export const AuthServiceContract = Symbol('AuthServiceContract');
