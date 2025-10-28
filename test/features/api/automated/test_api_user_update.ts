import typia from 'typia';
import type { Primitive } from 'typia';

import api from '../../../../src/api';
import type { UpdateUserDto } from '../../../../src/user/dto/update-user.dto';
import type { User } from '../../../../src/user/entities/user.entity';

export const test_api_user_update = async (connection: api.IConnection) => {
  const output: Primitive<null | User> = await api.functional.user.update(
    connection,
    typia.random<string>(),
    typia.random<UpdateUserDto>(),
  );
  typia.assert(output);
};
