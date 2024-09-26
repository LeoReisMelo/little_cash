import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { ServiceOrderServiceContract } from 'src/app/contracts/service-order/service-order.contract';
import { CreateServiceOrderDto } from './dtos/create-service-order/create-service-order.dto';
import { LinkClientWithServiceOrderDto } from './dtos/link-client-with-service-order/link-client-with-service-order.dto';
import { AddProductsToServiceOrderDto } from './dtos/add-products-to-service-order/add-products-to-service-order.dto';
import { FinalizeServiceOrderDto } from './dtos/finalize-service-order/finalize-service-order.dto';

@Resolver()
export class ServiceOrderResolver {
  constructor(
    @Inject(ServiceOrderServiceContract)
    private readonly serviceOrderService: ServiceOrderServiceContract,
  ) {}

  @Mutation(() => String, { nullable: true })
  async createServiceOrder(
    @Args('createServiceOrderDto') createServiceOrderDto: CreateServiceOrderDto,
  ): Promise<void> {
    await this.serviceOrderService.createServiceOrder(createServiceOrderDto);
  }

  @Mutation(() => String, { nullable: true })
  async linkClientWithServiceOrder(
    @Args('linkClientWithServiceOrderDto')
    linkClientWithServiceOrderDto: LinkClientWithServiceOrderDto,
  ): Promise<void> {
    await this.serviceOrderService.linkClientWithServiceOrder(
      linkClientWithServiceOrderDto,
    );
  }

  @Mutation(() => String, { nullable: true })
  async addProductsToServiceOrder(
    @Args('addProductsToServiceOrderDto')
    addProductsToServiceOrderDto: AddProductsToServiceOrderDto,
  ): Promise<void> {
    await this.serviceOrderService.addProductsToServiceOrder(
      addProductsToServiceOrderDto,
    );
  }

  @Mutation(() => String, { nullable: true })
  async finalizeServiceOrder(
    @Args('finalizeServiceOrderDto')
    finalizeServiceOrderDto: FinalizeServiceOrderDto,
  ): Promise<void> {
    await this.serviceOrderService.finalizeServiceOrder(
      finalizeServiceOrderDto,
    );
  }
}
