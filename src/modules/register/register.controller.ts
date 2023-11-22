import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}
  @Post('')
  async registerGet(@Body('tel') tel: string) {
    console.log(tel);
    const result = await this.registerService.register();
    return result;
  }
}
