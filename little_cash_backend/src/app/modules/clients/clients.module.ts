import { Module } from '@nestjs/common';
import { ClientsResolver } from './clients.resolver';
import { ClientsServiceContract } from 'src/app/contracts/clients/clients-service.contract';
import { ClientsService } from './clients.service';
import { ClientsRepository } from 'src/app/infrastructure/database/repositories/clients-repository';
import { ClientsRepositoryContract } from 'src/app/contracts/repositories/clients-repository.contract';
import { PrismaService } from 'src/app/infrastructure/database/prisma.service';

@Module({
  providers: [
    ClientsResolver,
    PrismaService,
    { provide: ClientsServiceContract, useClass: ClientsService },
    { provide: ClientsRepositoryContract, useClass: ClientsRepository },
  ],
})
export class ClientsModule {}
