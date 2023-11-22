import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { usersProviders } from '../../repository/user.provider';
import { UserRepository } from '../../repository/user.repository';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';

@Module({
  imports: [DatabaseModule],
  controllers: [RegisterController],
  providers: [RegisterService, ...usersProviders, UserRepository],
})
export class RegisterModule {}
