import { Inject, Injectable } from '@nestjs/common';
import { ClientsServiceContract } from 'src/app/contracts/clients/clients-service.contract';
import { CreateClientDto } from './dtos/create-client.dto';
import { ClientsRepositoryContract } from 'src/app/contracts/repositories/clients-repository.contract';

@Injectable()
export class ClientsService implements ClientsServiceContract {
  constructor(
    @Inject(ClientsRepositoryContract)
    private readonly clientsRepository: ClientsRepositoryContract,
  ) {}

  async createClient(createClientDto: CreateClientDto): Promise<void> {
    try {
      await this.clientsRepository.create({
        ...createClientDto,
      });
    } catch (err: any) {
      throw err;
    }
  }
}
