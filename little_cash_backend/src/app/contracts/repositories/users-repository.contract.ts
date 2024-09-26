import { Users } from '@prisma/client';
import { CreateUserDto } from 'src/app/modules/auth/dtos/create-user/create-user.dto';

export interface UsersRepositoryContract {
  create(createUserDto: CreateUserDto): Promise<void>;
  findByUsername(username: string): Promise<Users>;
}

export const UsersRepositoryContract = Symbol('UsersRepositoryContract');
