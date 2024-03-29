import { Body, Controller, Post } from '@nestjs/common';
import { IUserRegister } from '../../model/user.interface';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}
  @Post('')
  async registerGet(@Body() body: IUserRegister) {
    const result = await this.registerService.register(body);
    return result;
  }
}
