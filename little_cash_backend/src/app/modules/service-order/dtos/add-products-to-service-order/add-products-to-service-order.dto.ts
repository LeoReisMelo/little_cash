import { Field, InputType } from '@nestjs/graphql';
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsString } from 'class-validator';

@InputType()
class AddProductInput {
  @Field()
  id: string;

  @Field()
  quantity: number;
}

@InputType()
export class AddProductsToServiceOrderDto {
  @Field(() => [AddProductInput])
  @IsArray({ message: 'Products must be an array' })
  @ArrayNotEmpty({ message: 'Products must not be empty' })
  products: AddProductInput[];

  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty({ message: 'Service Order id not provided' })
  id: string;
}
