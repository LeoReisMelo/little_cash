import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

@InputType()
export class CreateClientDto {
  @Field()
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name not provided' })
  name: string;

  @Field()
  @IsEmail()
  @IsNotEmpty({ message: 'E-mail not provided' })
  email: string;

  @Field()
  @IsString({ message: 'CPF must be a string' })
  @IsNotEmpty({ message: 'CPF not provided' })
  @MinLength(11, { message: 'CPF must have at least 11 digits' })
  @Matches(/^[0-9]{11}$/, {
    message: 'CPF must be a valid number with 11 digits',
  })
  cpf: string;
}
