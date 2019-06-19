import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BioComponent } from './bio/bio.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeaderComponent, BioComponent, ProjectsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
