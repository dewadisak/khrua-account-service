import { Body, Controller, Post } from '@nestjs/common';
import { IUserRegister } from '../../model/user.interface';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}
  @Post('')
  async registerGet(@Body() body: IUserRegister) {
    console.log('body', body);
    const result = await this.registerService.register();
    return result;
  }
}
