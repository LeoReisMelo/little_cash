import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from 'src/app/modules/auth/dtos/create-user/create-user.dto';
import { UsersRepositoryContract } from 'src/app/contracts/repositories/users-repository.contract';
import { Users } from '@prisma/client';

@Injectable()
export class UsersRepository implements UsersRepositoryContract {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<void> {
    await this.prisma.users.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        password: createUserDto.password,
        username: createUserDto.username,
        cpf: createUserDto.cpf,
        roles: createUserDto.roles,
        position: createUserDto.position,
      },
    });
  }

  async findByUsername(username: string): Promise<Users> {
    return this.prisma.users.findUnique({
      where: { username },
    });
  }
}
