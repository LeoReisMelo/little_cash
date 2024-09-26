import { Module } from '@nestjs/common';
import { HealthResolver } from './health.resolver';
import { Jwt } from 'src/app/infrastructure/utils/jwt';

@Module({
  providers: [HealthResolver, Jwt],
})
export class HealthModule {}
