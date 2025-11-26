import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { GraphqlModule } from './graphql/graphql.module';
import { UsersResolver } from './users/users.resolver';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AppConfigModule,
    DatabaseModule,
    GraphqlModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService, UsersResolver, UsersService],
})
export class AppModule { }
