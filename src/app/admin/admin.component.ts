import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, DoCheck {

  projectsForm: FormGroup; 
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.projectsForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      link: new FormControl('', [Validators.required])
    });
  }

  ngDoCheck() {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/']);
    }
  }
  
  onProjectsFormSubmit() {
    if (this.projectsForm.invalid) {
      return;
    }
  }
}