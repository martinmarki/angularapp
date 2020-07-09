import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  showUserForm: boolean = false;

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: 'Kovács',
        lastName: 'István',
        age: 30,
        address: {
          street: '50',
          city: 'Budapest',
          state: 'Pest',
        },
        isActive: true,
        registered: new Date('01/08/2020 08:25:00'),
        hide: false
      },
      {
        firstName: 'Németh',
        lastName: 'Sarolta',
        age: 31,
        address: {
          street: '50',
          city: 'Szeged',
          state: 'Csongrád',
        },
        isActive: false,
        registered: new Date('06/07/2020 08:25:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        age: 26,
        address: {
          street: '55 Mill st.',
          city: 'Miami',
          state: 'Florida',
        },
        isActive: true,
        registered: new Date('11/11/2019 15:25:00'),
        hide: true
      },
    ];

    this.loaded = true;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('onsubmit')
  }

  fireEvent(e) {
    console.log(e.type);
  }

}
