import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [User])
  users() {
    return User.findAll();
  }
}
