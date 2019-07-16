import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  education = [
    {
      title: 'University 1',
      year: 2013
    },
    {
      title: 'Master Degree',
      year: 2015
    },
    {
      title: 'University 2',
      year: 2016
    }
  ]

  courses = [
    {
      title: 'Course 1',
      year: 2015
    },
    {
      title: 'Course 2',
      year: 2017
    },
    {
      title: 'Course 3',
      year: 2019
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}