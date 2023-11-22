import { User } from '../schema/user.entity';

export const usersProviders = [
  {
    provide: 'USER',
    useValue: User,
  },
];
