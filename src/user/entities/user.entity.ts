import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { tags } from 'typia';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50 })
  name: string;
}

// DTO에서 재사용할 수 있도록 타입 내보내기
// 타입으로 이렇게 표현하는게 class-validator 의 데코레이터보다 간편하고 읽기 쉽다고 느껴졌음
export type UserName = string & tags.MinLength<3> & tags.MaxLength<50>;
