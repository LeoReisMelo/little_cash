import { CreateClientDto } from 'src/app/modules/clients/dtos/create-client.dto';

export interface ClientsServiceContract {
  createClient(createClientDto: CreateClientDto): Promise<void>;
}

export const ClientsServiceContract = Symbol('ClientsServiceContract');
