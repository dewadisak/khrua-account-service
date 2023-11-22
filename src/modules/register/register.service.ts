import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repository/user.repository';

@Injectable()
export class RegisterService {
  constructor(private userRepository: UserRepository) {}
  public async register() {
    // await this.userRepository.create();
    console.log('');
    return;
  }
}
