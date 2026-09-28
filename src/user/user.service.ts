import { Injectable } from '@nestjs/common';
import { UserLogger } from './user.logger.js';


export interface User {
  id: number;
  name:string;
  email:string;
}

@Injectable()
export class UserService {
  constructor(private readonly logger: UserLogger) {}
  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  ];

  findAllUsers(name: string = '') {
    this.logger.log('Finding all users')
    return this.users.filter((user) => 
    user.name.toLowerCase().includes(name.toLowerCase()));
  }

  findOneUser(id: number) {
    this.logger.log(`Finding user with id: ${id}`);
    return this.users.find((user) => user.id === id);

  }


  }

