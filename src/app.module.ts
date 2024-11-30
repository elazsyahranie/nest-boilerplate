import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
// import { DatabaseModule } from './core/database/database.module';
import { DatabaseModule } from './core/database/database.module';
import * as dotenv from 'dotenv';
dotenv.config();

const { DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;
const DB_PORT = parseInt(process.env.DB_PORT);

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
