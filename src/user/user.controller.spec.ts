import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller.js';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('filters users by name', () => {
    expect(controller.getUsers('John')).toEqual([
      { id: 1, name: 'John Doe' },
    ]);
    expect(controller.getUsers(undefined)).toEqual([
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ]);
  });
});
