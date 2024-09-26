import { CreateProductDto } from 'src/app/modules/products/dtos/create-product/create-produtct.dto';

export interface ProductsRepositoryContract {
  create(createProductDto: CreateProductDto): Promise<void>;
}

export const ProductsRepositoryContract = Symbol('ProductsRepositoryContract');
