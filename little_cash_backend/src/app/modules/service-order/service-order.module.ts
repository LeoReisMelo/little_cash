import { Module } from '@nestjs/common';
import { PrismaService } from 'src/app/infrastructure/database/prisma.service';
import { ServiceOrderResolver } from './service-order.resolver';
import { ServiceOrderService } from './service-order.service';
import { ServiceOrderServiceContract } from 'src/app/contracts/service-order/service-order.contract';
import { ServiceOrderRepositoryContract } from 'src/app/contracts/repositories/service-order-repository.contract';
import { ServiceOrderRepository } from 'src/app/infrastructure/database/repositories/service-order-repository';

@Module({
  providers: [
    ServiceOrderResolver,
    PrismaService,
    { provide: ServiceOrderServiceContract, useClass: ServiceOrderService },
    {
      provide: ServiceOrderRepositoryContract,
      useClass: ServiceOrderRepository,
    },
  ],
})
export class ServiceOrderModule {}
