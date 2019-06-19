import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}