import typia from 'typia';
import type { Primitive } from 'typia';

import api from '../../../../src/api';
import type { User } from '../../../../src/user/entities/user.entity';

export const test_api_user_findAll = async (connection: api.IConnection) => {
  const output: Primitive<Array<User>> =
    await api.functional.user.findAll(connection);
  typia.assert(output);
};
