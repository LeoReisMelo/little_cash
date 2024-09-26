import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

@InputType()
export class LoginDto {
  @Field()
  @IsString({ message: 'Username is string' })
  @IsNotEmpty({ message: 'Username not provided' })
  username: string;

  @Field()
  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password not provided' })
  @MinLength(6, { message: 'Password must have a minimum of 6 characters' })
  password: string;
}
