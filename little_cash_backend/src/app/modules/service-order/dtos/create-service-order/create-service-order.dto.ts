import { Field, InputType } from '@nestjs/graphql';
import { IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateServiceOrderDto {
  @Field()
  @IsInt({ message: 'Number must be a integer' })
  @IsNotEmpty({ message: 'Number not provided' })
  number: number;
}
