import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private upersons: User[] = [
    {
      id: 1, 
      pincode: "263139",
 deliveryStatus: true, 
 district: "Nainital", 
 state: "UTTARAKHAND", 
 deliveryDay: 10 
    },
    {
      id: 2,
 pincode: "247001", 
 deliveryStatus: true, 
 district: "Saharanpur", 
 state: "UTTARPradesh",
 deliveryDay: 10 
    },
    {
      id: 2,
 pincode: "247001", 
 deliveryStatus: true, 
 district: "Saharanpur", 
 state: "UTTARPradesh",
 deliveryDay: 10 
    },
    {
      id: 2,
 pincode: "247001", 
 deliveryStatus: true, 
 district: "Saharanpur", 
 state: "UTTARPradesh",
 deliveryDay: 10 
    },
    {
      id: 2,
 pincode: "247001", 
 deliveryStatus: true, 
 district: "Saharanpur", 
 state: "UTTARPradesh",
 deliveryDay: 10 
    },
    {
      id: 2,
 pincode: "247001", 
 deliveryStatus: true, 
 district: "Saharanpur", 
 state: "UTTARPradesh",
 deliveryDay: 10 
    },
    {
      id: 2,
 pincode: "247001", 
 deliveryStatus: true, 
 district: "Saharanpur", 
 state: "UTTARPradesh",
 deliveryDay: 10 
    }
  ];

  constructor() { }

  getUsersFromData(): User[] {
    return this.upersons;
  }

  addUser(user: User) {
    user.id = this.upersons.length + 1;
    this.upersons.push(user);

  }
  updateUser(user: User) {
    const index = this.upersons.findIndex(u => user.id === u.id);
    this.upersons[index] = user;
  }
  deleteUser(user: User) {
    this.upersons.splice(this.upersons.indexOf(user), 1);
  }

}
