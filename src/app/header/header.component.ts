import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';

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
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    // const email = 'ksenia.ponomarenko@oxagile.com';
    // const password = 'KseniaPassword';
    // try {
    //   const { user } = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
    //   if (user) this.isLoggedIn = true;
    // } catch (error) {
    //   console.log(error);
    // }
    this.authService.login()
  }

  logout() {
    this.authService.logout();
  }

}