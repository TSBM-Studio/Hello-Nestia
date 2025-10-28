import typia from 'typia';
import type { Primitive } from 'typia';

import api from '../../../../src/api';
import type { CreateUserDto } from '../../../../src/user/dto/create-user.dto';
import type { User } from '../../../../src/user/entities/user.entity';

export const test_api_user_create = async (connection: api.IConnection) => {
  const output: Primitive<User> = await api.functional.user.create(
    connection,
    typia.random<CreateUserDto>(),
  );
  typia.assert(output);
};
