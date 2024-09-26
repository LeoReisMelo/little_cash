import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { AuthServiceContract } from 'src/app/contracts/auth/auth-service.contract';
import { UsersRepositoryContract } from 'src/app/contracts/repositories/users-repository.contract';
import { UsersRepository } from 'src/app/infrastructure/database/repositories/users.respository';
import { PrismaModule } from 'src/app/infrastructure/database/prisma.module';
import { Encryption } from 'src/app/infrastructure/utils/encryption';
import { Jwt } from 'src/app/infrastructure/utils/jwt';

@Module({
  imports: [PrismaModule],
  providers: [
    AuthService,
    AuthResolver,
    Encryption,
    Jwt,
    { provide: AuthServiceContract, useClass: AuthService },
    { provide: UsersRepositoryContract, useClass: UsersRepository },
  ],
})
export class AuthModule {}
