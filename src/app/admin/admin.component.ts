import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  projectsForm: FormGroup; 
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.projectsForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      link: new FormControl('', [Validators.required])
    });
  }
  
  onProjectsFormSubmit() {
    if (this.projectsForm.invalid) {
      return;
    }
  }
}