import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, DoCheck {

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private projectsService: ProjectsService
    ) { }

  ngOnInit() {
    this.projectsService.GetProjectsList();
  }

  ngDoCheck() {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/']);
    }
  }
  
  onProjectsFormSubmit(form) {
    const project = new Project(
      form.value.title,
      new Date(form.value.start).getFullYear(),
      form.value.description,
      form.value.link);
    this.projectsService.AddProject(project);
    form.reset();
  }
}