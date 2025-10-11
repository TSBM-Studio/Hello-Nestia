import { tags } from 'typia';

export interface IArticle {
  title: string & tags.MinLength<3> & tags.MaxLength<50>;
  content: string & tags.MinLength<10>;
}
