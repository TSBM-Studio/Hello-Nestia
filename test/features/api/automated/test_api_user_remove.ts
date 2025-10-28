import typia from 'typia';

import api from '../../../../src/api';

export const test_api_user_remove = async (connection: api.IConnection) => {
  const output = await api.functional.user.remove(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
};
