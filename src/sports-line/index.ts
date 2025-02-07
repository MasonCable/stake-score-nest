import { Module } from '@nestjs/common';
import { SportsLineResolver } from './resolvers';

@Module({
  providers: [SportsLineResolver],
})
export class SportsLineModule {}
