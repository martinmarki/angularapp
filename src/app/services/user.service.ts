import { Injectable } from '@angular/core';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];

  constructor() { 
    this.users = [
      {
        firstName: 'Kovács',
        lastName: 'István',
        email: 'kovi@gmail.com',
        isActive: true,
        registered: new Date('01/08/2020 08:25:00'),
        hide: false,
      },
      {
        firstName: 'Németh',
        lastName: 'Sarolta',
        email: 'nsara@gmail.com',
        isActive: false,
        registered: new Date('06/07/2020 08:25:00'),
        hide: true,
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        email: 'karen@gmail.com',
        isActive: true,
        registered: new Date('11/11/2019 15:25:00'),
        hide: true,
      },
    ];
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
