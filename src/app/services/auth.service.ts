import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthService {
  isLoggedIn = false;
  
  constructor(public afAuth: AngularFireAuth) { }

  async login() {
    const email = 'ksenia.ponomarenko@oxagile.com';
    const password = 'KseniaPassword';
    try {
      const { user } = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      if (user) this.isLoggedIn = true;
    } catch (error) {
      console.log(error);
    }
  }

  logout() {
    this.afAuth.auth.signOut();
    this.isLoggedIn = false;
  }
}