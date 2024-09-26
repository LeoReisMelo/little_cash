import { Module } from '@nestjs/common';
import { PrismaService } from 'src/app/infrastructure/database/prisma.service';
import { ProductsResolver } from './products.resolver';
import { ProductsRepositoryContract } from 'src/app/contracts/repositories/products-repository.contract';
import { ProductsServiceContract } from 'src/app/contracts/products/products-service.contract';
import { ProductsService } from './products.service';
import { ProductsRepository } from 'src/app/infrastructure/database/repositories/products-repository';

@Module({
  providers: [
    ProductsResolver,
    PrismaService,
    { provide: ProductsServiceContract, useClass: ProductsService },
    {
      provide: ProductsRepositoryContract,
      useClass: ProductsRepository,
    },
  ],
})
export class ProductsModule {}
