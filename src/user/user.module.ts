import { Module } from '@nestjs/common';
import { UserController } from './user.controller.js';
import { UserService } from './user.service.js';
import { UserLogger } from './user.logger.js';
@Module({
  controllers: [UserController],
  providers: [UserService, UserLogger]
})
export class UserModule {}
