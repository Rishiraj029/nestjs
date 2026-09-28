import { Controller, Get, Query, Post, Body,Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { Param } from '@nestjs/common';
import { UserService } from './user.service.js';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(@Query('name') name: string): unknown {
    return this.userService.findAllUsers(name);

  }

  @Get(':id')
  getUserById(@Query('id') id: string) {
    return { id, name: 'John Doe'};
  }

  @Post()
  createUser(@Body() CreateUserDto: CreateUserDto) {
    return { data: CreateUserDto, message: 'User created successfully' };
  }


  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return {id, ...updateUserDto }
    message: "User updated successfully"
  };

  @Get(':id')
  findOneUser(@Param('id') id: number) {
    return this.userService.findOneUser(id);

  }
}

