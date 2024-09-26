import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ClientsRepositoryContract } from 'src/app/contracts/repositories/clients-repository.contract';
import { CreateClientDto } from 'src/app/modules/clients/dtos/create-client.dto';

@Injectable()
export class ClientsRepository implements ClientsRepositoryContract {
  constructor(private readonly prisma: PrismaService) {}

  async create(createClientDto: CreateClientDto): Promise<void> {
    await this.prisma.clients.create({
      data: {
        name: createClientDto.name,
        email: createClientDto.email,
        cpf: createClientDto.cpf,
      },
    });
  }
}
