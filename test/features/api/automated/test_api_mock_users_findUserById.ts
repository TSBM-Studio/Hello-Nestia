import type { Primitive, tags } from 'typia';
import typia from 'typia';

import api from '../../../../src/api';
import type { IUser } from '../../../../src/app.controller';

export const test_api_mock_users_findUserById = async (
  connection: api.IConnection,
) => {
  const output: Primitive<IUser> = await api.functional.mock_users.findUserById(
    connection,
    typia.random<number & tags.Type<'uint32'>>(),
  );
  typia.assert(output);
};
