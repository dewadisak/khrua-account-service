import { Inject, Injectable } from '@nestjs/common';
import { User } from '../schema/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @Inject('USER')
    private accountModel: typeof User,
  ) {}
  public async create() {
    await this.accountModel.create({ tel: 'dsada', password: '09321323' });
    return 'create';
  }
}
