import { CreateProductDto } from 'src/app/modules/products/dtos/create-product/create-produtct.dto';

export interface ProductsServiceContract {
  createProduct(createProductDto: CreateProductDto): Promise<void>;
}

export const ProductsServiceContract = Symbol('ProductsServiceContract');
