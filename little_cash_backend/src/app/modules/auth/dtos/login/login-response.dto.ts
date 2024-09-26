import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
class User {
  @Field()
  id: string;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  name: string;

  @Field(() => [String])
  roles: string[];
}

@ObjectType()
export class AuthResponse {
  @Field()
  access_token: string;

  // @Field()
  // refresh_token: string; // Adicione o refresh_token

  @Field()
  expires_in: string;

  @Field()
  user: User;
}
