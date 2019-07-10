import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../models/project.model';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  // projects = [
  //   {
  //     title: 'Project 1',
  //     year: 2017,
  //     link: 'https://github.com/kseniyamikhel/ng7Tutorial'
  //   },
  //   {
  //     title: 'Project 2',
  //     year: 2018,
  //     link: 'https://github.com/kseniyamikhel/ng7Tutorial'
  //   },
  //   {
  //     title: 'Project 3',
  //     year: 2019,
  //     link: 'https://github.com/kseniyamikhel/ng7Tutorial'
  //   }
  // ]
  projects: AngularFireList<any>;
  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projectsService.GetProjectsList().valueChanges().subscribe(list => this.projects = list);
  }

}