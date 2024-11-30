import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { usersProviders } from './users.providers';

@Module({
  providers: [...usersProviders],
  controllers: [UsersController],
})
export class UsersModule {}
