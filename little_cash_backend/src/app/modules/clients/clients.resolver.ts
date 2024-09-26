import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { ClientsServiceContract } from 'src/app/contracts/clients/clients-service.contract';
import { CreateClientDto } from './dtos/create-client.dto';

@Resolver()
export class ClientsResolver {
  constructor(
    @Inject(ClientsServiceContract)
    private readonly clientsService: ClientsServiceContract,
  ) {}

  @Mutation(() => String, { nullable: true })
  async createClient(
    @Args('createClientDto') createClientDto: CreateClientDto,
  ): Promise<void> {
    await this.clientsService.createClient(createClientDto);
  }
}
