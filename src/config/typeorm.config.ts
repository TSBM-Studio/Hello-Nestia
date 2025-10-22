import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const TypeOrmConfig = {
  type: 'sqlite',
  database: 'crud.db',
  autoLoadEntities: true,
  synchronize: true,
  logging: true,
  dropSchema: true,
} satisfies TypeOrmModuleOptions;

export default TypeOrmConfig;
