import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      title: 'Project 1',
      year: 2017,
      link: 'https://github.com/kseniyamikhel/ng7Tutorial'
    },
    {
      title: 'Project 2',
      year: 2018,
      link: 'https://github.com/kseniyamikhel/ng7Tutorial'
    },
    {
      title: 'Project 3',
      year: 2019,
      link: 'https://github.com/kseniyamikhel/ng7Tutorial'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}