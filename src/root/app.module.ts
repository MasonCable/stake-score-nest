import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { SportsLineModule } from 'src/sports-line';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, //REQUIRED in v10+
      autoSchemaFile: 'schema.gql',
      playground: true, // Enables GraphQL Playground
    }),
    SportsLineModule,
  ],
})
export class AppModule {}
