import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class FinalizeServiceOrderDto {
  @Field()
  @IsString()
  @IsNotEmpty({ message: 'Payment method not provided' })
  paymentMethod: string;

  @Field()
  @IsString()
  @IsNotEmpty({ message: 'Service Order id not provided' })
  id: string;
}
