import { IDatabaseConfig } from './interfaces/dbConfig.interface';
import * as dotenv from 'dotenv';
dotenv.config();

const { DB_USER, DB_PASS, DB_NAME, DB_HOST, DB_PORT, DB_DIALECT } = process.env;

export const databaseConfig: IDatabaseConfig = {
  development: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
  },
  test: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT,
  },
  production: {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT,
  },
};
