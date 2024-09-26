import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ServiceOrderRepositoryContract } from 'src/app/contracts/repositories/service-order-repository.contract';
import { CreateServiceOrderDto } from 'src/app/modules/service-order/dtos/create-service-order/create-service-order.dto';
import { LinkClientWithServiceOrderDto } from 'src/app/modules/service-order/dtos/link-client-with-service-order/link-client-with-service-order.dto';
import { AddProductsToServiceOrderDto } from 'src/app/modules/service-order/dtos/add-products-to-service-order/add-products-to-service-order.dto';
import { FinalizeServiceOrderDto } from 'src/app/modules/service-order/dtos/finalize-service-order/finalize-service-order.dto';

@Injectable()
export class ServiceOrderRepository implements ServiceOrderRepositoryContract {
  constructor(private readonly prisma: PrismaService) {}

  async create(createServiceOrderDto: CreateServiceOrderDto): Promise<void> {
    await this.prisma.serviceOrder.create({
      data: {
        number: createServiceOrderDto.number,
      },
    });
  }

  async linkClientWithServiceOrder(
    linkClientWithServiceOrder: LinkClientWithServiceOrderDto,
  ): Promise<void> {
    await this.prisma.serviceOrder.update({
      where: { id: linkClientWithServiceOrder.id },
      data: {
        clientId: linkClientWithServiceOrder.clientId,
      },
    });
  }

  async addProductsToServiceOrder(
    addProductsToServiceOrderDto: AddProductsToServiceOrderDto,
  ): Promise<void> {
    const { id, products } = addProductsToServiceOrderDto;

    const serviceOrder = await this.prisma.serviceOrder.findUnique({
      where: { id },
      include: { products: true },
    });

    const updatedProducts = await Promise.all(
      products.map(async (product) => {
        const productData = await this.prisma.products.findUnique({
          where: { id: product.id },
        });

        await this.prisma.products.update({
          where: { id: product.id },
          data: {
            quantity: productData.quantity - product.quantity,
          },
        });

        return {
          id: product.id,
          quantity: product.quantity,
          total: productData.price * product.quantity,
        };
      }),
    );

    const newTotal = updatedProducts.reduce(
      (acc, item) => acc + item.total,
      serviceOrder.total,
    );

    await this.prisma.serviceOrder.update({
      where: { id: serviceOrder.id },
      data: {
        products: {
          create: products.map((product) => ({
            productId: product.id,
            quantity: product.quantity,
          })),
        },
        total: newTotal,
      },
    });
  }

  async finalizeServiceOrder(
    finalizeServiceOrderDto: FinalizeServiceOrderDto,
  ): Promise<void> {
    const { id, paymentMethod } = finalizeServiceOrderDto;

    const serviceOrder = await this.prisma.serviceOrder.findUnique({
      where: { id },
      include: { products: true },
    });

    await this.prisma.historyServiceOrder.create({
      data: {
        clientCpf: '',
        total: serviceOrder.total,
        paymentMethod,
      },
    });

    await this.prisma.serviceOrder.update({
      where: { id },
      data: { clientId: null, total: 0 },
    });
  }
}
