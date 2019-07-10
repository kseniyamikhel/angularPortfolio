import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BioComponent } from './bio/bio.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsService } from './services/projects.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

const firebaseConfig = {
  apiKey: "AIzaSyAvgeDW9W7RDDjx7sTeo-xH5u4GC6VmGUg",
  authDomain: "portfolio-1acb9.firebaseapp.com",
  databaseURL: "https://portfolio-1acb9.firebaseio.com",
  projectId: "portfolio-1acb9",
  storageBucket: "",
  messagingSenderId: "612053576605",
  appId: "1:612053576605:web:c32967dd71de317a"
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig, 'portfolio'),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  declarations: [AppComponent, HeaderComponent, BioComponent, ProjectsComponent],
  bootstrap: [AppComponent],
  providers: [ProjectsService, AngularFireDatabase]
})
export class AppModule { }
