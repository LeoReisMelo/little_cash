import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class LinkClientWithServiceOrderDto {
  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty({ message: 'ClientId not provided' })
  clientId: string;

  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty({ message: 'Service Order id not provided' })
  id: string;
}
