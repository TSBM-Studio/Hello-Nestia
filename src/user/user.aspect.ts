import { AOPDecorator, Aspect, ResultAOPContext } from 'nestjs-saop';
import { User } from './entities/user.entity';

@Aspect()
export class UserAspect extends AOPDecorator {
  afterReturning({ result }: ResultAOPContext<never, Promise<User>>) {
    return async () => {
      const user = await result;
      console.log('User entity created:', user);
    };
  }
}
