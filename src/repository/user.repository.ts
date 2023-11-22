import { Inject, Injectable } from '@nestjs/common';
import { User } from '../schema/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @Inject('USER')
    private usersModel: typeof User,
  ) {}
  public async create() {
    await this.usersModel.create({ tel: 'dsada', password: '09321323' });
    return 'create';
  }
}
