import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AOPModule } from 'nestjs-saop';
import { User } from './entities/user.entity';
import { UserAspect } from './user.aspect';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), AOPModule],
  controllers: [UserController],
  providers: [UserService, UserAspect],
})
export class UserModule {}
