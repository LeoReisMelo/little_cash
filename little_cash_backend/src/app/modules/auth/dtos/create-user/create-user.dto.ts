import { Field, InputType } from '@nestjs/graphql';
import {
  ArrayNotEmpty,
  IsArray,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';
import { Role } from '../../enums/role.enum';

@InputType()
export class CreateUserDto {
  @Field()
  @IsString({ message: 'Username must be a string' })
  @IsNotEmpty({ message: 'Username not provided' })
  username: string;

  @Field()
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name not provided' })
  name: string;

  @Field()
  @IsEmail()
  @IsNotEmpty({ message: 'E-mail not provided' })
  email: string;

  @Field()
  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password not provided' })
  @MinLength(6, { message: 'Password must have a minimum of 6 characters' })
  password: string;

  @Field()
  @IsString({ message: 'CPF must be a string' })
  @IsNotEmpty({ message: 'CPF not provided' })
  @MinLength(11, { message: 'CPF must have at least 11 digits' })
  @Matches(/^[0-9]{11}$/, {
    message: 'CPF must be a valid number with 11 digits',
  })
  cpf: string;

  @Field(() => [String])
  @IsArray({ message: 'Roles must be an array' })
  @ArrayNotEmpty({ message: 'Roles must not be empty' })
  @IsEnum(Role, {
    each: true,
    message: 'Invalid role. Allowed roles are: ADMIN, SUPERVISOR, USER',
  })
  roles: Role[];

  @Field({ nullable: true })
  @IsString({ message: 'Position must be a string' })
  @IsOptional()
  position?: string;
}
