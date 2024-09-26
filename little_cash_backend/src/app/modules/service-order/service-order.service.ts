import { Inject, Injectable } from '@nestjs/common';
import { CreateServiceOrderDto } from './dtos/create-service-order/create-service-order.dto';
import { ServiceOrderServiceContract } from 'src/app/contracts/service-order/service-order.contract';
import { ServiceOrderRepositoryContract } from 'src/app/contracts/repositories/service-order-repository.contract';
import { LinkClientWithServiceOrderDto } from './dtos/link-client-with-service-order/link-client-with-service-order.dto';
import { AddProductsToServiceOrderDto } from './dtos/add-products-to-service-order/add-products-to-service-order.dto';
import { FinalizeServiceOrderDto } from './dtos/finalize-service-order/finalize-service-order.dto';

@Injectable()
export class ServiceOrderService implements ServiceOrderServiceContract {
  constructor(
    @Inject(ServiceOrderRepositoryContract)
    private readonly serviceOrderRepository: ServiceOrderRepositoryContract,
  ) {}

  async createServiceOrder(
    createServiceOrderDto: CreateServiceOrderDto,
  ): Promise<void> {
    try {
      await this.serviceOrderRepository.create(createServiceOrderDto);
    } catch (err: any) {
      throw err;
    }
  }

  async linkClientWithServiceOrder(
    linkClientWithServiceOrder: LinkClientWithServiceOrderDto,
  ): Promise<void> {
    try {
      await this.serviceOrderRepository.linkClientWithServiceOrder(
        linkClientWithServiceOrder,
      );
    } catch (err: any) {
      throw err;
    }
  }

  async addProductsToServiceOrder(
    addProductsToServiceOrderDto: AddProductsToServiceOrderDto,
  ): Promise<void> {
    try {
      await this.serviceOrderRepository.addProductsToServiceOrder(
        addProductsToServiceOrderDto,
      );
    } catch (err: any) {
      throw err;
    }
  }

  async finalizeServiceOrder(
    finalizeServiceOrderDto: FinalizeServiceOrderDto,
  ): Promise<void> {
    try {
      await this.serviceOrderRepository.finalizeServiceOrder(
        finalizeServiceOrderDto,
      );
    } catch (err: any) {
      throw err;
    }
  }
}
