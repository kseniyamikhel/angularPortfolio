import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  projectsRef: AngularFireList<any>;
  projectRef: AngularFireObject<any>;
  
 
  constructor(private db: AngularFireDatabase) { }

  AddProject(project: Project) {
    this.projectsRef.push({
      title: project.title,
      start: project.start,
      end: project.end,
      description: project.description,
      link: project.link
    })
  }

  GetProject(id: number) {
    this.projectRef = this.db.object('projects/' + id);
    return this.projectRef;
  }

  public GetProjectsList() {
    this.projectsRef = this.db.list('projects');
    return this.projectsRef;
  }  

  UpdateProject(project: Project) {
    this.projectRef.update({
      title: project.title,
      start: project.start,
      end: project.end,
      description: project.description,
      link: project.link
    })
  }  

  DeleteProject(id: number) { 
    this.projectRef = this.db.object('projects/'+id);
    this.projectRef.remove();
  }
  
}