import type { UserName } from '../entities/user.entity';

export interface UpdateUserDto {
  name?: UserName;
}
