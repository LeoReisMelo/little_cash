import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product/create-produtct.dto';
import { ProductsServiceContract } from 'src/app/contracts/products/products-service.contract';

@Resolver()
export class ProductsResolver {
  constructor(
    @Inject(ProductsServiceContract)
    private readonly productsService: ProductsServiceContract,
  ) {}

  @Mutation(() => String, { nullable: true })
  async createProduct(
    @Args('createProductDto') createProductDto: CreateProductDto,
  ): Promise<void> {
    await this.productsService.createProduct(createProductDto);
  }
}
