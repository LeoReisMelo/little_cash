import { AddProductsToServiceOrderDto } from 'src/app/modules/service-order/dtos/add-products-to-service-order/add-products-to-service-order.dto';
import { CreateServiceOrderDto } from 'src/app/modules/service-order/dtos/create-service-order/create-service-order.dto';
import { FinalizeServiceOrderDto } from 'src/app/modules/service-order/dtos/finalize-service-order/finalize-service-order.dto';
import { LinkClientWithServiceOrderDto } from 'src/app/modules/service-order/dtos/link-client-with-service-order/link-client-with-service-order.dto';

export interface ServiceOrderRepositoryContract {
  create(createServiceOrderDto: CreateServiceOrderDto): Promise<void>;
  linkClientWithServiceOrder(
    linkClientWithServiceOrder: LinkClientWithServiceOrderDto,
  ): Promise<void>;
  addProductsToServiceOrder(
    addProductsToServiceOrderDto: AddProductsToServiceOrderDto,
  ): Promise<void>;
  finalizeServiceOrder(
    finalizeServiceOrderDto: FinalizeServiceOrderDto,
  ): Promise<void>;
}

export const ServiceOrderRepositoryContract = Symbol(
  'ServiceOrderRepositoryContract',
);
