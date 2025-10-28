import type { Primitive, tags } from 'typia';
import typia from 'typia';

import api from '../../../../src/api';

export const test_api_int_getIntValue = async (connection: api.IConnection) => {
  const output: Primitive<number> = await api.functional.int.getIntValue(
    connection,
    typia.random<number & tags.Type<'int32'>>(),
  );
  typia.assert(output);
};
