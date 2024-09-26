import { Field, InputType } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateProductDto {
  @Field()
  @IsInt({ message: 'Quantity must be a integer' })
  @IsNotEmpty({ message: 'Quantity not provided' })
  quantity: number;

  @Field()
  @IsNumber()
  @IsNotEmpty({ message: 'Price not provided' })
  price: number;

  @Field()
  @IsString({ message: 'Name must be string' })
  @IsNotEmpty({ message: 'Name not provided' })
  name: string;
}
