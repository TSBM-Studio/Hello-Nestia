import typia from 'typia';
import type { Primitive } from 'typia';

import api from '../../../../src/api';
import type { User } from '../../../../src/user/entities/user.entity';

export const test_api_user_findOne = async (connection: api.IConnection) => {
  const output: Primitive<null | User> = await api.functional.user.findOne(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
};
