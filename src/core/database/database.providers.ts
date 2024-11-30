import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { Users } from '../../users/users.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }

      const sequelize = new Sequelize({
        ...config,
        logging: console.log, // Enable query logging
      });

      try {
        await sequelize.authenticate();
        console.log('Database connected successfully!');
        sequelize.addModels([Users]);
        await sequelize.sync({ alter: true }); // Sync models to the database
        console.log('Database synchronized successfully!');
      } catch (err) {
        console.error('Sequelize initialization error:', err);
      }

      return sequelize;
    },
  },
];
