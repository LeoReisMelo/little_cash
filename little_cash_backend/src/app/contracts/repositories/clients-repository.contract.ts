import { CreateClientDto } from 'src/app/modules/clients/dtos/create-client.dto';

export interface ClientsRepositoryContract {
  create(createClientDto: CreateClientDto): Promise<void>;
}

export const ClientsRepositoryContract = Symbol('ClientsRepositoryContract');
