import { Injectable } from '@nestjs/common';
import { IUserRegister } from '../../model/user.interface';
import { UserRepository } from '../../repository/user.repository';

@Injectable()
export class RegisterService {
  constructor(private userRepository: UserRepository) {}
  public async register(body: IUserRegister) {
    const duplicate = await this.userRepository.findByPrompPay(body.promptPay);
    if (duplicate) {
      return 'is exist';
    }
    await this.userRepository.create(body);
    return;
  }
}
