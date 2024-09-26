import { Inject, Injectable } from '@nestjs/common';
import { ProductsServiceContract } from 'src/app/contracts/products/products-service.contract';
import { CreateProductDto } from './dtos/create-product/create-produtct.dto';
import { ProductsRepositoryContract } from 'src/app/contracts/repositories/products-repository.contract';

@Injectable()
export class ProductsService implements ProductsServiceContract {
  constructor(
    @Inject(ProductsRepositoryContract)
    private readonly productsRepositoryContract: ProductsRepositoryContract,
  ) {}

  async createProduct(createProductDto: CreateProductDto): Promise<void> {
    try {
      await this.productsRepositoryContract.create(createProductDto);
    } catch (err: any) {
      throw err;
    }
  }
}
