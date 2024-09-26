import { Module } from '@nestjs/common';
import { AuthModule } from './app/modules/auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { HealthModule } from './app/modules/health/health.module';
import { PrismaModule } from './app/infrastructure/database/prisma.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './app/config/configuration';
import { ClientsModule } from './app/modules/clients/clients.module';
import { ServiceOrderModule } from './app/modules/service-order/service-order.module';
import { ProductsModule } from './app/modules/products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      context: ({ req }) => ({ headers: req.headers }),
    }),
    AuthModule,
    HealthModule,
    ClientsModule,
    ServiceOrderModule,
    ProductsModule,
    PrismaModule,
  ],
})
export class AppModule {}
