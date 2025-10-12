import {
  TypedBody,
  TypedException,
  TypedParam,
  TypedQuery,
  TypedRoute,
} from '@nestia/core';
import { Controller, NotFoundException } from '@nestjs/common';
import { tags } from 'typia';
import { AppService } from './app.service';
import { IPage } from './common/page';
import { IArticle } from './dto/IArticle';

interface IUser {
  id: number;
  role: 'admin' | 'editor' | 'user';
}

const userSet = new Set<IUser>([
  { id: 1, role: 'admin' },
  { id: 2, role: 'editor' },
  { id: 3, role: 'user' },
]);

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // NestJS 의 기본적인 컨트롤러 사용법과 비슷하여 적응이 쉬웠음
  @TypedRoute.Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @TypedRoute.Get('/hello-value/:value')
  getValue(@TypedParam('value') value: string): string {
    return `${value} is value!`;
  }

  // 기존 NestJS 에서는 Pipe 를 통해서 검증하는 경우가 있었는데, typia 에서는 타입으로 간편하게 검증할 수 있는게 인상깊음
  // 특히 uint32, int32, uint64, int64 등과 같은 다양한 숫자 타입을 지원하는 점이 좋았음
  @TypedRoute.Get('/int/:value')
  getIntValue(@TypedParam('value') value: number & tags.Type<'int32'>): number {
    return value + 10;
  }

  @TypedRoute.Get('/paged')
  pagedQuery(@TypedQuery() query: IPage): string {
    return `size: ${query.size}, total: ${query.total}`;
  }

  // 클래스가 아닌 인터페이스로 DTO 를 정의하는 점이 신선했음
  // 클래스 형태보단 인터페이스나 타입으로 데이터의 형태를 정의하는게 개인적으로 익숙해서, typia 의 방식이 편리했음
  @TypedRoute.Post('/article')
  articlePost(@TypedBody() body: IArticle): string {
    return `title: ${body.title}, content: ${body.content}`;
  }

  // Exception 표시에 어떤 오류가 발생하는지 제네릭에 넣지 않으면 never 타입으로 된다는 점이 인상깊었음
  // 반드시 여기엔 어떤 에러가 발생하는지 표시하도록 강제하는 느낌
  @TypedRoute.Get('/users/:id')
  @TypedException<NotFoundException>({
    status: 404,
    description: 'User not found',
  })
  findUserById(@TypedParam('id') id: number & tags.Type<'uint32'>): IUser {
    const user = [...userSet].find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
