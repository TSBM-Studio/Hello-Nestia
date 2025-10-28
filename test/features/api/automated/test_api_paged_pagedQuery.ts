import typia from 'typia';
import type { Primitive } from 'typia';

import api from '../../../../src/api';
import type { IPage } from '../../../../src/common/page';

export const test_api_paged_pagedQuery = async (
  connection: api.IConnection,
) => {
  const output: Primitive<string> = await api.functional.paged.pagedQuery(
    connection,
    typia.random<IPage>(),
  );
  typia.assert(output);
};
