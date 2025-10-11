import { tags } from 'typia';

export interface IPage {
  size: number & tags.Type<'uint32'>;
  total: number & tags.Type<'uint32'>;
}
