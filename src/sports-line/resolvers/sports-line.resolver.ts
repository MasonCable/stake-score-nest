import { Resolver, Query } from '@nestjs/graphql';

@Resolver(() => String)
export class SportsLineResolver {
  //   constructor(private readonly sportsLineService: SportsLineService) {}

  @Query(() => String, { name: 'getAllSportsLines' })
  getAllSportsLines(): string {
    return 'test';
  }
}
