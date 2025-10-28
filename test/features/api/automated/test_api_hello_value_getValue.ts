import type { Primitive } from 'typia';
import typia from 'typia';

import api from '../../../../src/api';

export const test_api_hello_value_getValue = async (
  connection: api.IConnection,
) => {
  const output: Primitive<string> = await api.functional.hello_value.getValue(
    connection,
    typia.random<string>(),
  );
  typia.assert(output);
};
