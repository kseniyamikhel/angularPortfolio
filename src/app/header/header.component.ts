import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user = {
    name: 'Kseniya',
    surname: 'Ponomarenko',
    githubLink: 'https://github.com/kseniyamikhel',
    position: 'Front-end Developer',
    avatar: 'https://avatars2.githubusercontent.com/u/17389743?s=460&v=4'
  }
  constructor(public afAuth: AngularFireAuth) { }

  isLoggedIn = false;

  ngOnInit() {
  }

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