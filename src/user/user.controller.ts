import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';
import { Controller, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @TypedRoute.Post()
  create(@TypedBody() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @TypedRoute.Get()
  findAll() {
    return this.userService.findAll();
  }

  @TypedRoute.Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @TypedRoute.Patch(':id')
  update(
    @TypedParam('id') id: string,
    @TypedBody() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(id, updateUserDto);
  }

  @TypedRoute.Delete(':id')
  remove(@TypedParam('id') id: string) {
    return this.userService.remove(id);
  }
}
