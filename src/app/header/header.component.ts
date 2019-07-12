import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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

  ngOnInit() {
  }
  login() {
    const email = 'ksenia.ponomarenko@oxagile.com';
    const password = 'KseniaPassword';
    this.afAuth.auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      console.log(error);
    });
  }

}