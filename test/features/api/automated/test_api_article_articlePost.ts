import type { Primitive } from 'typia';
import typia from 'typia';

import api from '../../../../src/api';
import type { IArticle } from '../../../../src/dto/IArticle';

export const test_api_article_articlePost = async (
  connection: api.IConnection,
) => {
  const output: Primitive<string> = await api.functional.article.articlePost(
    connection,
    typia.random<IArticle>(),
  );
  typia.assert(output);
};
