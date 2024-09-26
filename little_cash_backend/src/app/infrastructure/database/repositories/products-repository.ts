import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ProductsRepositoryContract } from 'src/app/contracts/repositories/products-repository.contract';
import { CreateProductDto } from 'src/app/modules/products/dtos/create-product/create-produtct.dto';

@Injectable()
export class ProductsRepository implements ProductsRepositoryContract {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto): Promise<void> {
    await this.prisma.products.create({
      data: {
        ...createProductDto,
      },
    });
  }
}
