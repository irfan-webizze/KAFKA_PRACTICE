import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  imports: [
   GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "/tmp/schema.gql",
      sortSchema: true,
      playground: process.env.ENVIRONMENT !== "PRODUCTION",
      context: ({ req, res }) => ({ req, res }),
    }),
  ],
})
export class GraphqlModule {}
