import { Inject, Injectable } from '@nestjs/common';
import { User } from '../schema/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @Inject('USER')
    private userModel: typeof User,
  ) {}
  public async create(body: any) {
    const create = await this.userModel.create(body);
    return create;
  }

  public async findByPrompPay(promptPay: string) {
    try {
      const data = await User.findOne({ where: { promptPay: promptPay } });
      const result = data.dataValues;
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  }
}
