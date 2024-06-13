import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private storage: Storage = sessionStorage;

  constructor() { }

  login() : void {
    this.storage.setItem('user', JSON.stringify({
      'registrationNumber': '4631',
      'name': 'Alessio',
      'surname': 'Zubiani',
      'role': 'USER'
    }));
  }

  private getLoggedUser() : any {
    const s: string | null = this.storage.getItem('user');
    if(s !== null) {
      return JSON.parse(s);
    }

    return null;
  }

  isAdmin() : boolean {
    const user = this.getLoggedUser();
    if(user !== null) {
      return user.role === 'ADMIN';
    } else {
      return false;
    }
  }

}
