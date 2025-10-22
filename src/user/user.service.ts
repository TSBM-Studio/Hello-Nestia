import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return this.userRepository.manager.transaction(async (manager) => {
      const user = manager.create(User, createUserDto);
      return await manager.save(user);
    });
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findOneBy({ id });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.manager.transaction(async (manager) => {
      await manager.update(User, id, updateUserDto);
      return await manager.findOneBy(User, { id });
    });
  }

  remove(id: string) {
    return this.userRepository.manager.transaction(async (manager) => {
      await manager.delete(User, { id });
    });
  }
}
