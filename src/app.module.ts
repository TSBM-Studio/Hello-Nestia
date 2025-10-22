import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import TypeOrmConfig from './config/typeorm.config';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(TypeOrmConfig), UserModule],
  controllers: [AppController],
})
export class AppModule {}
