import { Controller, Get } from '@nestjs/common';

@Controller('register')
export class RegisterController {
  @Get('')
  registerGet() {
    return 'register dew';
  }
}
